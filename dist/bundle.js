/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// index.js\ndocument.addEventListener('DOMContentLoaded', function () {\n  var links = document.querySelectorAll('nav a');\n  links.forEach(function (link) {\n    link.addEventListener('click', function (e) {\n      e.preventDefault();\n      var href = e.target.getAttribute('href');\n      fetchPage(href);\n      window.history.pushState({\n        path: href\n      }, '', href);\n    });\n  });\n  window.onpopstate = function (e) {\n    var path = e.state.path;\n    fetchPage(path);\n  };\n  function fetchPage(path) {\n    fetch(path).then(function (response) {\n      return response.text();\n    }).then(function (html) {\n      var parser = new DOMParser();\n      var newDocument = parser.parseFromString(html, 'text/html');\n      document.body.innerHTML = newDocument.body.innerHTML;\n    })[\"catch\"](function (error) {\n      return console.error('Error fetching page:', error);\n    });\n  }\n});\nvar links = document.querySelectorAll('.link');\nvar sections = document.querySelectorAll('section');\nvar activeLink = 0;\nlinks.forEach(function (link, i) {\n  link.addEventListener('click', function () {\n    if (activeLink != i) {\n      links[activeLink].classList.remove('active');\n      link.classList.add('active');\n      sections[activeLink].classList.remove('active');\n      setTimeout(function () {\n        activeLink = i;\n        sections[i].classList.add('active');\n      }, 1000);\n    }\n  });\n});\n\n//# sourceURL=webpack://project1/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;