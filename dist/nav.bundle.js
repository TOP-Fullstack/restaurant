"use strict";
(self["webpackChunksandbox_code"] = self["webpackChunksandbox_code"] || []).push([["nav"],{

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nav)
/* harmony export */ });
function nav() {

    // Header
    const header = document.createElement('header');

    // Hero banner
    const hero = document.createElement('div');
    hero.classList.add('hero');
    header.appendChild(hero);

    // Nav bar elements
    const nav = document.createElement('nav');
    header.appendChild(nav);

    // Nav bar navigation elements
    const ul = document.createElement('ul');
    nav.appendChild(ul);
    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li');
        li.innerHTML = 'Hello';
        li.addEventListener('click', function () {
            console.log('hey');
        })
        ul.appendChild(li);
    }

    return header;

}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/nav.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbmRib3gtY29kZS8uL3NyYy9uYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2KCkge1xyXG5cclxuICAgIC8vIEhlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcblxyXG4gICAgLy8gSGVybyBiYW5uZXJcclxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlcm8pO1xyXG5cclxuICAgIC8vIE5hdiBiYXIgZWxlbWVudHNcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG4gICAgLy8gTmF2IGJhciBuYXZpZ2F0aW9uIGVsZW1lbnRzXHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gJ0hlbGxvJztcclxuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hleScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcblxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9