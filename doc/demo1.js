(() => {
  "use strict";
  // 打包的模块
  var __webpack_modules__ = {
    "./src/a.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      // eval(
      //   "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   funcA: () => (/* binding */ funcA)\n/* harmony export */ });\nfunction funcA() {\n  console.log('in funcA');\n}\n\n//# sourceURL=webpack://webpack-bundle-result/./src/a.js?"
      // );
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        funcA: () => funcA,
      });
      function funcA() {
        console.log("in funcA");
      }
    },

    "./src/index.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      // eval(
      //   "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   funcB: () => (/* binding */ funcB)\n/* harmony export */ });\n/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ \"./src/a.js\");\n\n\nfunction funcB() {\n  (0,_a__WEBPACK_IMPORTED_MODULE_0__.funcA)();\n  console.log('in funcB');\n}\n\nfuncB()\n\n//# sourceURL=webpack://webpack-bundle-result/./src/index.js?"
      // );
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        funcB: () => funcB,
      });
      var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/a.js");
      function funcB() {
        (0, _a__WEBPACK_IMPORTED_MODULE_0__.funcA)();
        console.log("in funcB");
      }
      funcB();
    },
  };

  /************************************************************************/
  // The module cache 模块缓存
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  /************************************************************************/
  /* webpack/runtime/define property getters */
  (() => {
    // define getter functions for harmony exports
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  /* webpack/runtime/hasOwnProperty shorthand */
  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  /* webpack/runtime/make namespace object */
  (() => {
    // define __esModule on exports
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();

  /************************************************************************/

  // startup
  // Load entry module and return exports
  // This entry module can't be inlined because the eval devtool is used.
  var __webpack_exports__ = __webpack_require__("./src/index.js");
})();
