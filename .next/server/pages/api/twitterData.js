"use strict";
(() => {
var exports = {};
exports.id = 141;
exports.ids = [141];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 2477:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const twitterAuth = {
  consumer_key: "RPsC9Lp2svdAa2sT19d9Oam1R",
  consumer_secret: "FnuBOkmGPc0ZmVtcuJLFSVnUzanDT5MUF94KdnLvt5dtvVVzR7",
  access_token_key: process.env.TNEXT_PUBLIC_WITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TNEXT_PUBLIC_WITTER_ACCESS_TOKEN_SECRET,
  bearer_token: "AAAAAAAAAAAAAAAAAAAAAKcMVAEAAAAA2kGpioAkJg6iNY%2BCBpXa5lmZYEU%3DhhjhYiThPKz8V6nXBi04q94tSGztEQHfFNvA6lSVr4vEPScfQE"
};
console.log(twitterAuth);
async function handler(req, res) {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("https://api.twitter.com/1.1/search/tweets.json", {
      headers: {
        Authorization: `Bearer ${twitterAuth.bearer_token}`
      },
      params: {
        q: `#100DaysOfCode`
      }
    }); // console.log(response.data);

    res.status(200).json(response.data);
  } catch (error) {
    // console.error(error);
    res.status(500).json({
      error: error.message
    });
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2477));
module.exports = __webpack_exports__;

})();