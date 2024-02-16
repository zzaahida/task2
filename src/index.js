// index.js
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            fetchPage(href);
            window.history.pushState({ path: href }, '', href);
        });
    });

    window.onpopstate = (e) => {
        const path = e.state.path;
        fetchPage(path);
    };

    function fetchPage(path) {
        fetch(path)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const newDocument = parser.parseFromString(html, 'text/html');
                document.body.innerHTML = newDocument.body.innerHTML;
            })
            .catch(error => console.error('Error fetching page:', error));
    }
});
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})