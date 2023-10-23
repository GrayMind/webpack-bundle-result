(() => {
  // webpackBootstrap
  var __webpack_modules__ = {
    "./src/demo2/a.js": (module) => {
      // eval("function funcA() {\n  console.log(\"in funcA\");\n}\nmodule.exports = funcA;\n\n\n//# sourceURL=webpack://webpack-bundle-result/./src/demo2/a.js?");
      function funcA() {
        console.log("in funcA");
      }
      module.exports = funcA;
    },

    "./src/demo2/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      // eval("const funcA = __webpack_require__(/*! ./a */ \"./src/demo2/a.js\");\n\nfunction funcB() {\n  funcA();\n  console.log(\"in funcB\");\n}\nfuncB();\nmodule.exports = funcB;\n\n\n//# sourceURL=webpack://webpack-bundle-result/./src/demo2/index.js?");
      const funcA = __webpack_require__("./src/demo2/a.js");
      function funcB() {
        funcA();
        console.log("in funcB");
      }
      funcB();
      module.exports = funcB;
    },
  };
  /************************************************************************/
  // The module cache
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

  // startup
  // Load entry module and return exports
  // This entry module is referenced by other modules so it can't be inlined
  var __webpack_exports__ = __webpack_require__("./src/demo2/index.js");
})();
