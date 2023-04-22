"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/twitterData";
exports.ids = ["pages/api/twitterData"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/twitterData.ts":
/*!**************************************!*\
  !*** ./src/pages/api/twitterData.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst twitterAuth = {\n  consumer_key: \"RPsC9Lp2svdAa2sT19d9Oam1R\",\n  consumer_secret: \"FnuBOkmGPc0ZmVtcuJLFSVnUzanDT5MUF94KdnLvt5dtvVVzR7\",\n  access_token_key: process.env.TNEXT_PUBLIC_WITTER_ACCESS_TOKEN_KEY,\n  access_token_secret: process.env.TNEXT_PUBLIC_WITTER_ACCESS_TOKEN_SECRET,\n  bearer_token: \"AAAAAAAAAAAAAAAAAAAAAKcMVAEAAAAA2kGpioAkJg6iNY%2BCBpXa5lmZYEU%3DhhjhYiThPKz8V6nXBi04q94tSGztEQHfFNvA6lSVr4vEPScfQE\"\n};\nconsole.log(twitterAuth);\nasync function handler(req, res) {\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.twitter.com/1.1/search/tweets.json\", {\n      headers: {\n        Authorization: `Bearer ${twitterAuth.bearer_token}`\n      },\n      params: {\n        q: `#100DaysOfCode`\n      }\n    }); // console.log(response.data);\n\n    res.status(200).json(response.data);\n  } catch (error) {\n    // console.error(error);\n    res.status(500).json({\n      error: error.message\n    });\n  }\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3R3aXR0ZXJEYXRhLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFFQSxNQUFNQyxXQUFXLEdBQUc7RUFDbEJDLFlBQVksRUFBRUMsMkJBREk7RUFFbEJHLGVBQWUsRUFBRUgsb0RBRkM7RUFHbEJLLGdCQUFnQixFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssb0NBSFo7RUFJbEJDLG1CQUFtQixFQUFFUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU8sdUNBSmY7RUFLbEJDLFlBQVksRUFBRVQsb0hBQTRDVTtBQUx4QyxDQUFwQjtBQVFBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWQsV0FBWjtBQUVlLGVBQWVlLE9BQWYsQ0FDYkMsR0FEYSxFQUViQyxHQUZhLEVBR2I7RUFDQSxJQUFJO0lBQ0YsTUFBTUMsUUFBUSxHQUFHLE1BQU1uQixpREFBQSxDQUNyQixnREFEcUIsRUFFckI7TUFDRXFCLE9BQU8sRUFBRTtRQUNQQyxhQUFhLEVBQUcsVUFBU3JCLFdBQVcsQ0FBQ1csWUFBYTtNQUQzQyxDQURYO01BSUVXLE1BQU0sRUFBRTtRQUNOQyxDQUFDLEVBQUc7TUFERTtJQUpWLENBRnFCLENBQXZCLENBREUsQ0FZRjs7SUFDQU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJQLFFBQVEsQ0FBQ1EsSUFBOUI7RUFDRCxDQWRELENBY0UsT0FBT0MsS0FBUCxFQUFjO0lBQ2Q7SUFDQVYsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7TUFBRUUsS0FBSyxFQUFFQSxLQUFLLENBQUNDO0lBQWYsQ0FBckI7RUFDRDtBQUNGLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbG9rTWlyYWouZGV2LmlvLy4vc3JjL3BhZ2VzL2FwaS90d2l0dGVyRGF0YS50cz80NTljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCB0d2l0dGVyQXV0aCA9IHtcbiAgY29uc3VtZXJfa2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19UV0lUVEVSX0NPTlNVTUVSX0tFWSxcbiAgY29uc3VtZXJfc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19UV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCxcbiAgYWNjZXNzX3Rva2VuX2tleTogcHJvY2Vzcy5lbnYuVE5FWFRfUFVCTElDX1dJVFRFUl9BQ0NFU1NfVE9LRU5fS0VZLFxuICBhY2Nlc3NfdG9rZW5fc2VjcmV0OiBwcm9jZXNzLmVudi5UTkVYVF9QVUJMSUNfV0lUVEVSX0FDQ0VTU19UT0tFTl9TRUNSRVQsXG4gIGJlYXJlcl90b2tlbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVFdJVFRFUl9CRUFSRVJfVE9LRU4sXG59O1xuXG5jb25zb2xlLmxvZyh0d2l0dGVyQXV0aCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIFwiaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vMS4xL3NlYXJjaC90d2VldHMuanNvblwiLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3R3aXR0ZXJBdXRoLmJlYXJlcl90b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBxOiBgIzEwMERheXNPZkNvZGVgLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UuZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidHdpdHRlckF1dGgiLCJjb25zdW1lcl9rZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVFdJVFRFUl9DT05TVU1FUl9LRVkiLCJjb25zdW1lcl9zZWNyZXQiLCJORVhUX1BVQkxJQ19UV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCIsImFjY2Vzc190b2tlbl9rZXkiLCJUTkVYVF9QVUJMSUNfV0lUVEVSX0FDQ0VTU19UT0tFTl9LRVkiLCJhY2Nlc3NfdG9rZW5fc2VjcmV0IiwiVE5FWFRfUFVCTElDX1dJVFRFUl9BQ0NFU1NfVE9LRU5fU0VDUkVUIiwiYmVhcmVyX3Rva2VuIiwiTkVYVF9QVUJMSUNfVFdJVFRFUl9CRUFSRVJfVE9LRU4iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlc3BvbnNlIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJxIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/twitterData.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/twitterData.ts"));
module.exports = __webpack_exports__;

})();