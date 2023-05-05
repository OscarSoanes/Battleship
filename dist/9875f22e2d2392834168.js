/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/**\\n * Reset Mixing\\n * ================================================== */\\n/**\\n * Disable Animation\\n */\\n/**\\n * Disable animation depends on Browser or Operation System configuration\\n */\\n/**\\n * Accessability. Black and White Mode\\n */\\n/**\\n * Accessability. Inverse Mode\\n */\\n/**\\n * Meter reset\\n */\\n/**\\n * Modern CSS Reset Tweaks\\n * ================================================== */\\nhtml {\\n  -webkit-text-size-adjust: 100%;\\n}\\nhtml:focus-within {\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  text-size-adjust: 100%;\\n  position: relative;\\n  width: 100%;\\n  min-height: 100vh;\\n  -moz-osx-font-smoothing: grayscale;\\n  -webkit-font-smoothing: antialiased;\\n  text-rendering: optimizeSpeed;\\n}\\n\\n/* Box sizing normalization */\\n*,\\n::after,\\n::before {\\n  box-sizing: border-box;\\n}\\n\\n/* Elements that don't have a class get default styles */\\na:not([class]) {\\n  text-decoration-skip-ink: auto;\\n}\\n\\n/**\\n * CSS Reset Tweaks\\n *\\n * http://meyerweb.com/eric/tools/css/reset/\\n * v2.0-modified | 20110126\\n * License: none (public domain)\\n */\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  font-size: 100%;\\n  font: inherit;\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  vertical-align: baseline;\\n}\\n\\n/* make sure to set some focus styles for accessibility */\\n:focus {\\n  outline: 0;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\nmain,\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\n\\nol,\\nul {\\n  list-style: none;\\n}\\n\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\n/**\\n * Input Reset\\n */\\ninput:required,\\ninput {\\n  box-shadow: none;\\n}\\n\\ninput:-webkit-autofill,\\ninput:-webkit-autofill:hover,\\ninput:-webkit-autofill:focus,\\ninput:-webkit-autofill:active {\\n  -webkit-box-shadow: 0 0 0 30px white inset;\\n}\\n\\ninput[type=search]::-webkit-search-cancel-button,\\ninput[type=search]::-webkit-search-decoration,\\ninput[type=search]::-webkit-search-results-button,\\ninput[type=search]::-webkit-search-results-decoration {\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n}\\n\\ninput[type=search] {\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  -webkit-box-sizing: content-box;\\n  -moz-box-sizing: content-box;\\n  box-sizing: content-box;\\n}\\n\\ntextarea {\\n  overflow: auto;\\n  vertical-align: top;\\n  resize: vertical;\\n}\\n\\ninput:focus {\\n  outline: none;\\n}\\n\\n/**\\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\\n */\\naudio,\\ncanvas,\\nvideo {\\n  display: inline-block;\\n  max-width: 100%;\\n}\\n\\n/**\\n * Prevent modern browsers from displaying `audio` without controls.\\n * Remove excess height in iOS 5 devices.\\n */\\naudio:not([controls]) {\\n  display: none;\\n  height: 0;\\n}\\n\\n/**\\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\\n */\\n[hidden] {\\n  display: none;\\n}\\n\\n/**\\n * Improve readability when focused and also mouse hovered in all browsers.\\n */\\na:active,\\na:hover {\\n  outline: none;\\n}\\n\\n/* Make images easier to work with */\\nimg {\\n  max-width: 100%;\\n  display: inline-block;\\n  vertical-align: middle;\\n  height: auto;\\n}\\n\\n/* Make pictures easier to work with */\\npicture {\\n  display: inline-block;\\n}\\n\\n/**\\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\\n * the UA stylesheet.\\n */\\nbutton,\\ninput {\\n  line-height: normal;\\n}\\n\\n/**\\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\\n * All other form control elements do not inherit `text-transform` values.\\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\\n * Correct `select` style inheritance in Firefox 4+ and Opera.\\n */\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\nbutton,\\nhtml input[type=button],\\ninput[type=reset],\\ninput[type=submit] {\\n  -webkit-appearance: button;\\n  cursor: pointer;\\n  border: 0;\\n  background: transparent;\\n}\\n\\n/**\\n * Re-set default cursor for disabled elements.\\n */\\nbutton[disabled],\\nhtml input[disabled] {\\n  cursor: default;\\n}\\n\\n[disabled] {\\n  pointer-events: none;\\n}\\n\\n/**\\n * 1. Address box sizing set to content-box in IE 8/9.\\n */\\ninput[type=checkbox],\\ninput[type=radio] {\\n  padding: 0;\\n}\\n\\n/**\\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\\n *    (include `-moz` to future-proof).\\n */\\ninput[type=search] {\\n  -webkit-appearance: textfield;\\n  -moz-box-sizing: content-box;\\n  -webkit-box-sizing: content-box;\\n  box-sizing: content-box;\\n}\\n\\n/**\\n * Remove inner padding and search cancel button in Safari 5 and Chrome\\n * on OS X.\\n */\\ninput[type=search]::-webkit-search-cancel-button,\\ninput[type=search]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * Remove inner padding and border in Firefox 3+.\\n */\\nbutton::-moz-focus-inner,\\ninput::-moz-focus-inner {\\n  border: 0;\\n  padding: 0;\\n}\\n\\nbutton {\\n  border: 0;\\n  background: transparent;\\n}\\n\\ntextarea {\\n  overflow: auto;\\n  vertical-align: top;\\n  resize: vertical;\\n}\\n\\n/**\\n * Remove most spacing between table cells.\\n */\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n  text-indent: 0;\\n}\\n\\n/**\\n * Based on normalize.css v8.0.1\\n * github.com/necolas/normalize.css\\n */\\nhr {\\n  box-sizing: content-box;\\n  overflow: visible;\\n  background: #000;\\n  border: 0;\\n  height: 1px;\\n  line-height: 0;\\n  margin: 0;\\n  padding: 0;\\n  page-break-after: always;\\n  width: 100%;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n */\\npre {\\n  font-family: monospace, monospace;\\n  font-size: 100%;\\n}\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\nabbr[title] {\\n  border-bottom: none;\\n  text-decoration: none;\\n}\\n\\ncode,\\nkbd,\\npre,\\nsamp {\\n  font-family: monospace, monospace;\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\nsmall {\\n  font-size: 75%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -5px;\\n}\\n\\nsup {\\n  top: -5px;\\n}\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  font-size: 100%;\\n  line-height: 1;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\nbutton,\\ninput {\\n  /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\nbutton,\\nselect {\\n  /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\nbutton,\\n[type=button],\\n[type=reset],\\n[type=submit] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\nbutton::-moz-focus-inner,\\n[type=button]::-moz-focus-inner,\\n[type=reset]::-moz-focus-inner,\\n[type=submit]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n  outline: 0;\\n}\\n\\nlegend {\\n  color: inherit;\\n  white-space: normal;\\n  display: block;\\n  border: 0;\\n  max-width: 100%;\\n  width: 100%;\\n}\\n\\nfieldset {\\n  min-width: 0;\\n}\\n\\nbody:not(:-moz-handler-blocked) fieldset {\\n  display: block;\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n[type=number]::-webkit-inner-spin-button,\\n[type=number]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n[type=search] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  outline-offset: -2px;\\n  /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n[type=search]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n/*\\n * Add the correct display in all browsers.\\n */\\nsummary {\\n  display: list-item;\\n}\\n\\n/*\\n * Misc\\n * ========================================================================== */\\ntemplate {\\n  display: none;\\n}\\n\\nbody {\\n  display: grid;\\n  grid-template-rows: max-content 1fr min-content;\\n  font-family: \\\"Source Sans Pro\\\", sans-serif;\\n  background-color: #1B2430;\\n  color: #D6D5A8;\\n}\\n\\nheader {\\n  margin: auto;\\n  font-size: 3rem;\\n  font-weight: 900;\\n}\\n\\nfooter {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 1rem;\\n  gap: 1rem;\\n  background-color: #51557E;\\n  box-shadow: #51557E 0px -1px 4px;\\n}\\nfooter img {\\n  width: 2rem;\\n}\\nfooter img:hover {\\n  transform: scale(1.1) rotate(360deg);\\n  opacity: 0.8;\\n  transition: all 1s;\\n}\\n\\nbutton, input {\\n  background-color: #1B2430;\\n  color: #D6D5A8;\\n  border: #D6D5A8 1px solid;\\n}\\n\\n#start-menu {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-around;\\n  height: 100%;\\n}\\n#start-menu #name-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 0.3rem;\\n}\\n#start-menu #name-container label {\\n  font-size: 1.15rem;\\n}\\n#start-menu input {\\n  font-weight: 700;\\n  width: 200px;\\n}\\n#start-menu input, #start-menu button {\\n  font-size: 1.2rem;\\n  text-align: center;\\n  border-radius: 1rem;\\n  padding: 0.5rem;\\n  border-width: 2px;\\n  box-shadow: #D6D5A8 0px 1px 2px;\\n}\\n\\nbutton:hover, button:focus {\\n  transform: scale(0.95);\\n  transition: transform 350ms ease-in-out;\\n}\\n\\n.errorContainer {\\n  display: flex;\\n  gap: 1rem;\\n  align-items: center;\\n  margin-top: 0.5rem;\\n  font-weight: 600;\\n  color: #f2f2f2;\\n}\\n.errorContainer img {\\n  width: 2rem;\\n}\\n\\n#setup-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin: 0 1rem;\\n  height: 100%;\\n  margin-top: 2rem;\\n  margin-bottom: 2rem;\\n  gap: 1rem;\\n}\\n#setup-container .axis-container, #setup-container #button-container {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  width: 100%;\\n}\\n#setup-container .axis-container h2, #setup-container #button-container h2 {\\n  font-size: 1.3rem;\\n}\\n#setup-container #next-ship {\\n  font-size: 1.4rem;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.4rem;\\n  align-items: center;\\n}\\n#setup-container #next-ship .row {\\n  display: flex;\\n}\\n#setup-container #next-ship .row .cell {\\n  width: 28px;\\n  height: 28px;\\n  background-color: #9dbce9;\\n  border: #f2f2f2 1px solid;\\n}\\n#setup-container #button-container {\\n  margin-top: 1rem;\\n}\\n#setup-container #button-container #reset-button {\\n  border-color: #694d81;\\n  border-width: 3px;\\n  padding-left: 1rem;\\n  padding-right: 1rem;\\n}\\n#setup-container #start-game-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 0.5rem;\\n  margin-top: 1.5rem;\\n}\\n#setup-container #start-game-container #start-game {\\n  border-width: 2px;\\n  box-shadow: #D6D5A8 0px 1px 2px;\\n}\\n#setup-container button {\\n  border-radius: 1rem;\\n  padding: 1rem;\\n}\\n\\n.grid-container h2 {\\n  text-align: center;\\n  font-size: 1.5rem;\\n  margin-bottom: 1rem;\\n  font-weight: 600;\\n}\\n.grid-container .grid .row {\\n  display: flex;\\n}\\n.grid-container .grid .row .cell {\\n  position: relative;\\n  flex-shrink: 0;\\n  width: 28px;\\n  height: 28px;\\n  border: 1px solid white;\\n}\\n.grid-container .grid .row .hover-effect {\\n  background-color: #D6D5A8;\\n}\\n.grid-container .grid .row .cell-error {\\n  background-color: rgba(197, 123, 123, 0.7215686275);\\n}\\n.grid-container .grid .row .ship {\\n  background-color: #9dbce9;\\n}\\n\\n#game-screen {\\n  margin: 1rem 2rem 4rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 2rem;\\n}\\n#game-screen #move-container {\\n  width: 100%;\\n}\\n#game-screen #move-container #move {\\n  text-align: center;\\n  font-size: 1.5rem;\\n  min-height: 8rem;\\n}\\n#game-screen .attacked, #game-screen #player-grid .cell {\\n  cursor: not-allowed !important;\\n}\\n#game-screen #enemy-grid .cell {\\n  cursor: pointer;\\n}\\n#game-screen #enemy-grid .cell:hover {\\n  background-color: rgba(157, 188, 233, 0.3764705882);\\n}\\n#game-screen .attacked::after {\\n  content: \\\"\\\";\\n  height: 9.3333333333px;\\n  width: 9.3333333333px;\\n  top: 9.3333333333px;\\n  left: 9.3333333333px;\\n  background-color: white;\\n  position: absolute;\\n  border-radius: 1rem;\\n}\\n#game-screen .hit::after {\\n  background-color: red;\\n}\\n\\n#end-screen {\\n  height: 100%;\\n  margin: 1rem 2rem 4rem;\\n  display: flex;\\n  text-align: center;\\n  flex-direction: column;\\n  justify-content: space-around;\\n}\\n#end-screen #winner-section::first-line {\\n  font-size: 1.4rem;\\n}\\n#end-screen #winner-name {\\n  font-size: 3rem;\\n  font-weight: 900;\\n}\\n#end-screen button {\\n  font-size: 1.2rem;\\n  text-align: center;\\n  border-radius: 1rem;\\n  padding: 0.5rem;\\n  border-width: 2px;\\n  box-shadow: #D6D5A8 0px 1px 2px;\\n}\\n\\n@media (min-width: 600px) {\\n  label, button {\\n    font-size: 1.4rem !important;\\n  }\\n  input {\\n    font-size: 1.6rem !important;\\n    width: auto !important;\\n  }\\n  #setup-container {\\n    margin: 0 10vw !important;\\n  }\\n  #start-button {\\n    width: 20rem;\\n  }\\n  .grid .cell {\\n    width: 48px !important;\\n    height: 48px !important;\\n  }\\n  .attacked::after {\\n    height: 16px !important;\\n    width: 16px !important;\\n    top: 16px !important;\\n    left: 16px !important;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  #move-container {\\n    flex: 1 0 100% !important;\\n  }\\n  #move-container #move {\\n    min-height: 4rem !important;\\n  }\\n  #setup-container {\\n    margin: 0 20vw !important;\\n  }\\n  #game-screen {\\n    flex-direction: row !important;\\n    flex-wrap: wrap;\\n    align-items: center;\\n    justify-content: center;\\n    column-gap: 4rem;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/css/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/css/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/classes/gameboard.js":
/*!*************************************!*\
  !*** ./src/js/classes/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nclass Gameboard {\n  constructor() {\n    this.gameboard = createGameboard();\n  }\n\n  placeShip(location, axis, ship) {\n    let shipLength = new Array(ship.length).fill(\" \");\n    let startingLocation = JSON.parse(JSON.stringify(location));\n\n    const outOfBounds = this.checkOutOfBounds(shipLength, location, axis);\n\n    if (outOfBounds === \"collision\") {\n      return outOfBounds;\n    }\n\n    location = startingLocation;\n\n    for (let index = 0; index < ship.length; index++) {\n      this.gameboard[location.y][location.x] = ship;\n\n      if (axis === \"vertical\") {\n        location.y++;\n      } else {\n        location.x++;\n      }\n    }\n  }\n\n  checkOutOfBounds(shipLength, location, axis) {\n    let x = shipLength.every(() => {\n      if (location.y > 9 || location.x > 9) {\n        return false;\n      }\n\n      if (typeof this.gameboard[location.y][location.x] === \"object\") {\n        return false;\n      }\n\n      if (axis === \"vertical\") {\n        location.y++;\n      } else {\n        location.x++;\n      }\n      return true;\n    });\n\n    if (x === false) {\n      return \"collision\";\n    }\n  }\n\n  recieveAttack(location) {\n    const valueAt = this.gameboard[location.y][location.x];\n\n    if (valueAt === \"\") {\n      this.gameboard[location.y][location.x] = \"m\";\n      return \"missed\";\n    }\n\n    if (typeof valueAt === \"object\") {\n      valueAt.hit();\n      this.gameboard[location.y][location.x] = \"h\";\n\n      if (valueAt.isSunk()) {\n        return \"sunk\";\n      }\n\n      return \"hit\";\n    }\n  }\n\n  isSunk() {\n    function checkRow(element) {\n      if (typeof element === \"object\") {\n        return false;\n      }\n      return true;\n    }\n\n    return this.gameboard.every((row) => {\n      return row.every(checkRow);\n    });\n  }\n}\n\nfunction createGameboard() {\n  let gameboard = [];\n\n  for (let x = 0; x < 10; x++) {\n    const row = [];\n    for (let y = 0; y < 10; y++) {\n      row.push(\"\");\n    }\n    gameboard.push(row);\n  }\n\n  return gameboard;\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/classes/gameboard.js?");

/***/ }),

/***/ "./src/js/classes/player.js":
/*!**********************************!*\
  !*** ./src/js/classes/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/js/classes/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/js/classes/ship.js\");\n\n\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.prevMoves = [];\n    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n    this.ships = generateShips();\n  }\n\n  placeShip(x, y, axis) {\n    const nextShip = this.ships.shift();\n\n    const result = this.gameboard.placeShip({ x: x, y: y }, axis, nextShip);\n\n    if (result === \"collision\") {\n      this.ships.unshift(nextShip);\n    }\n  }\n\n  autoPlaceShips() {\n    const axis = [\"horizontal\", \"vertical\"];\n    while (this.ships.length != 0) {\n      const x = Math.round(Math.random() * 9);\n      const y = Math.round(Math.random() * 9);\n      const thisAxis = axis[Math.round(Math.random())];\n      this.placeShip(x, y, thisAxis);\n    }\n  }\n\n  incomingAttack(x, y) {\n    if (this.prevMoves.some((coords) => coords.x === x && coords.y === y)) {\n      return \"already-found\";\n    }\n\n    this.prevMoves.push({ x: x, y: y });\n    return this.gameboard.recieveAttack({ x: x, y: y });\n  }\n\n  randomAttack() {\n    const x = Math.round(Math.random() * 9);\n    const y = Math.round(Math.random() * 9);\n\n    const incomingAttack = this.incomingAttack(x, y);\n    if (incomingAttack === \"already-found\") {\n      return this.randomAttack();\n    } else {\n      return incomingAttack;\n    }\n  }\n}\n\nfunction generateShips() {\n  const lengths = [2, 3, 3, 4, 5];\n  const ships = [];\n\n  lengths.forEach((length) => {\n    ships.push(new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(length));\n  });\n\n  return ships;\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/classes/player.js?");

/***/ }),

/***/ "./src/js/classes/ship.js":
/*!********************************!*\
  !*** ./src/js/classes/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hits = 0;\n  }\n\n  hit() {\n    this.hits++;\n  }\n\n  isSunk() {\n    if (this.length <= this.hits) {\n      return true;\n    }\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/classes/ship.js?");

/***/ }),

/***/ "./src/js/components/createEndingScreen.js":
/*!*************************************************!*\
  !*** ./src/js/components/createEndingScreen.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createEndScreen\": () => (/* binding */ createEndScreen)\n/* harmony export */ });\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start */ \"./src/js/components/start.js\");\n\n\nfunction createEndScreen(winner) {\n  const main = document.querySelector(\"main\");\n\n  const endingContainer = document.createElement(\"div\");\n  endingContainer.setAttribute(\"id\", \"end-screen\");\n\n  const winnerSection = document.createElement(\"section\");\n  winnerSection.setAttribute(\"id\", \"winner-section\");\n\n  const winnerBefore = document.createElement(\"p\");\n  winnerBefore.textContent = \"The winner is:\";\n\n  const winnerName = document.createElement(\"p\");\n  winnerName.setAttribute(\"id\", \"winner-name\");\n  winnerName.textContent = winner;\n\n  winnerSection.append(winnerBefore, winnerName);\n\n  const playAgain = document.createElement(\"button\");\n  playAgain.setAttribute(\"id\", \"play-again-btn\");\n  playAgain.textContent = \"Play Again?\";\n\n  playAgain.addEventListener(\"click\", () => playAgainListener());\n\n  endingContainer.append(winnerSection, playAgain);\n  main.appendChild(endingContainer);\n}\n\nfunction playAgainListener() {\n  const main = document.querySelector(\"main\");\n  const endingContainer = document.getElementById(\"end-screen\");\n\n  main.removeChild(endingContainer);\n  (0,_start__WEBPACK_IMPORTED_MODULE_0__.startMenu)();\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/components/createEndingScreen.js?");

/***/ }),

/***/ "./src/js/components/createErrorContainer.js":
/*!***************************************************!*\
  !*** ./src/js/components/createErrorContainer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorContainer\": () => (/* binding */ errorContainer)\n/* harmony export */ });\n/* harmony import */ var _assets_warning_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/warning.svg */ \"./src/assets/warning.svg\");\n\n\nfunction errorContainer(message) {\n  const errorContainer = document.createElement(\"div\");\n  errorContainer.classList.add(\"errorContainer\");\n\n  const warningIcon = new Image();\n  warningIcon.src = _assets_warning_svg__WEBPACK_IMPORTED_MODULE_0__;\n\n  const errorMsg = document.createElement(\"p\");\n  errorMsg.classList.add(\"error\");\n  errorMsg.textContent = message;\n\n  errorContainer.append(warningIcon, errorMsg);\n\n  return errorContainer;\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/components/createErrorContainer.js?");

/***/ }),

/***/ "./src/js/components/createGame.js":
/*!*****************************************!*\
  !*** ./src/js/components/createGame.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGame\": () => (/* binding */ createGame)\n/* harmony export */ });\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ \"./src/js/components/grid.js\");\n/* harmony import */ var _placingElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placingElement */ \"./src/js/components/placingElement.js\");\n\n\n\nfunction createGame(startingSize) {\n  const main = document.querySelector(\"main\");\n\n  const gameContainer = document.createElement(\"div\");\n  gameContainer.setAttribute(\"id\", \"setup-container\");\n\n  const grid = (0,_grid__WEBPACK_IMPORTED_MODULE_0__.createGrid)(\"Create our Loadout\");\n\n  const axisContainer = document.createElement(\"section\");\n  axisContainer.classList.add(\"axis-container\");\n\n  const heading = document.createElement(\"h2\");\n  heading.setAttribute(\"id\", \"current-axis\");\n  heading.textContent = \"Current Axis: x\";\n\n  const button = document.createElement(\"button\");\n  button.textContent = \"Change axis to y\";\n  button.addEventListener(\"click\", () =>\n    changeAxisEventListener(heading, button)\n  );\n\n  axisContainer.append(heading, button);\n\n  const nextShip = (0,_placingElement__WEBPACK_IMPORTED_MODULE_1__.placingElement)(startingSize);\n\n  const buttonContainer = document.createElement(\"section\");\n  buttonContainer.setAttribute(\"id\", \"button-container\");\n  const reset = document.createElement(\"button\");\n  reset.textContent = \"Reset\";\n  reset.setAttribute(\"id\", \"reset-button\");\n\n  const auto = document.createElement(\"button\");\n  auto.textContent = \"Auto Place\";\n  auto.setAttribute(\"id\", \"auto-place-button\");\n\n  buttonContainer.append(reset, auto);\n\n  const startGameSection = document.createElement(\"section\");\n  startGameSection.setAttribute(\"id\", \"start-game-container\");\n\n  const startGame = document.createElement(\"button\");\n  startGame.setAttribute(\"id\", \"start-game\");\n  startGame.textContent = \"Start Game\";\n\n  startGameSection.appendChild(startGame);\n\n  gameContainer.append(\n    grid,\n    axisContainer,\n    nextShip,\n    buttonContainer,\n    startGameSection\n  );\n  main.appendChild(gameContainer);\n}\n\nfunction changeAxisEventListener(heading, button) {\n  if (heading.textContent === \"Current Axis: x\") {\n    heading.textContent = \"Current Axis: y\";\n    button.textContent = \"Change axis to x\";\n    return;\n  }\n  heading.textContent = \"Current Axis: x\";\n  button.textContent = \"Change axis to y\";\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/components/createGame.js?");

/***/ }),

/***/ "./src/js/components/createGameLoop.js":
/*!*********************************************!*\
  !*** ./src/js/components/createGameLoop.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGame\": () => (/* binding */ createGame)\n/* harmony export */ });\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ \"./src/js/components/grid.js\");\n\n\nfunction createGame(player) {\n  const main = document.querySelector(\"main\");\n\n  const container = document.createElement(\"div\");\n  container.setAttribute(\"id\", \"game-screen\");\n\n  const moveContainer = document.createElement(\"section\");\n  moveContainer.setAttribute(\"id\", \"move-container\");\n\n  const move = document.createElement(\"p\");\n  move.setAttribute(\"id\", \"move\");\n  move.textContent = \"Awaiting your move!\";\n\n  moveContainer.appendChild(move);\n\n  const enemyGrid = (0,_grid__WEBPACK_IMPORTED_MODULE_0__.createGrid)(\"Enemies Water\");\n  enemyGrid.setAttribute(\"id\", \"enemy-grid\");\n\n  player.childNodes[0].textContent = \"Our Water\";\n  player.setAttribute(\"id\", \"player-grid\");\n\n  container.append(moveContainer, enemyGrid, player);\n  main.appendChild(container);\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/components/createGameLoop.js?");

/***/ }),

/***/ "./src/js/components/grid.js":
/*!***********************************!*\
  !*** ./src/js/components/grid.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGrid\": () => (/* binding */ createGrid)\n/* harmony export */ });\nfunction createGrid(message) {\n  const gridContainer = document.createElement(\"section\");\n  gridContainer.classList.add(\"grid-container\");\n\n  const heading = document.createElement(\"h2\");\n  heading.textContent = message;\n\n  const grid = document.createElement(\"div\");\n  grid.classList.add(\"grid\");\n\n  for (let y = 0; y < 10; y++) {\n    const row = document.createElement(\"div\");\n    row.classList.add(\"row\");\n\n    for (let x = 0; x < 10; x++) {\n      const cell = document.createElement(\"div\");\n      cell.classList.add(\"cell\");\n      cell.setAttribute(\"location\", `{\"x\": \"${x}\", \"y\": \"${y}\"}`);\n\n      row.appendChild(cell);\n    }\n\n    grid.appendChild(row);\n  }\n\n  gridContainer.append(heading, grid);\n  return gridContainer;\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/components/grid.js?");

/***/ }),

/***/ "./src/js/components/initial.js":
/*!**************************************!*\
  !*** ./src/js/components/initial.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start)\n/* harmony export */ });\n/* harmony import */ var _assets_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/github.svg */ \"./src/assets/github.svg\");\n\n\nfunction start() {\n  const header = buildHeader();\n\n  const main = document.createElement(\"main\");\n\n  const footer = buildFooter();\n\n  document.body.append(header, main, footer);\n}\n\nfunction buildHeader() {\n  const header = document.createElement(\"header\");\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"BATTLESHIPS\";\n\n  header.appendChild(heading);\n  return header;\n}\n\nfunction buildFooter() {\n  const footer = document.createElement(\"footer\");\n\n  const madeBy = document.createElement(\"p\");\n  madeBy.textContent = \"Made by Oscar Soanes, 2023\";\n\n  const linkToGitHub = document.createElement(\"a\");\n  linkToGitHub.href = \"https://github.com/OscarSoanes\";\n\n  const githubImage = new Image();\n  githubImage.src = _assets_github_svg__WEBPACK_IMPORTED_MODULE_0__;\n\n  linkToGitHub.appendChild(githubImage);\n\n  footer.append(madeBy, linkToGitHub);\n  return footer;\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/components/initial.js?");

/***/ }),

/***/ "./src/js/components/placingElement.js":
/*!*********************************************!*\
  !*** ./src/js/components/placingElement.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"placingElement\": () => (/* binding */ placingElement)\n/* harmony export */ });\nfunction placingElement(size) {\n  const container = document.createElement(\"section\");\n  container.setAttribute(\"id\", \"next-ship\");\n\n  const heading = document.createElement(\"h2\");\n\n  if (size === 0) {\n    heading.textContent = \"All ships placed\";\n    container.appendChild(heading);\n\n    return container;\n  }\n\n  heading.textContent = \"Next Ship: \";\n  heading.ariaValueText = `Next Ship: ${size} Long`;\n\n  const row = document.createElement(\"div\");\n  row.classList.add(\"row\");\n\n  for (let index = 0; index < size; index++) {\n    const cell = document.createElement(\"div\");\n    cell.classList.add(\"cell\");\n\n    row.appendChild(cell);\n  }\n\n  container.append(heading, row);\n  return container;\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/components/placingElement.js?");

/***/ }),

/***/ "./src/js/components/start.js":
/*!************************************!*\
  !*** ./src/js/components/start.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startMenu\": () => (/* binding */ startMenu)\n/* harmony export */ });\n/* harmony import */ var _game_startGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/startGame */ \"./src/js/game/startGame.js\");\n/* harmony import */ var _createErrorContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createErrorContainer */ \"./src/js/components/createErrorContainer.js\");\n\n\n\nfunction startMenu() {\n  const menu = document.querySelector(\"main\");\n\n  const container = document.createElement(\"div\");\n  container.setAttribute(\"id\", \"start-menu\");\n\n  const nameContainer = buildNameContainer();\n  const startButton = buildStartButton();\n\n  container.append(nameContainer, startButton);\n  menu.appendChild(container);\n}\n\nfunction buildNameContainer() {\n  const nameContainer = document.createElement(\"div\");\n  nameContainer.setAttribute(\"id\", \"name-container\");\n\n  const label = document.createElement(\"label\");\n  label.textContent = \"Enter your name:\";\n  label.htmlFor = \"name\";\n\n  const input = document.createElement(\"input\");\n  input.type = \"text\";\n  input.name = \"name\";\n  input.placeholder = \"What is your name?\";\n\n  input.setAttribute(\"id\", \"name\");\n\n  nameContainer.append(label, input);\n\n  return nameContainer;\n}\n\nfunction buildStartButton() {\n  const startButton = document.createElement(\"button\");\n  startButton.type = \"button\";\n  startButton.setAttribute(\"id\", \"start-button\");\n  startButton.textContent = \"Start Game\";\n\n  startButton.addEventListener(\"click\", (event) =>\n    startButtonEventHandler(event)\n  );\n\n  return startButton;\n}\n\nfunction startButtonEventHandler(event) {\n  event.preventDefault();\n\n  const name = document.getElementById(\"name\").value;\n\n  if (name.trim() !== \"\") {\n    const startMenu = document.getElementById(\"start-menu\");\n    const main = document.querySelector(\"main\");\n\n    main.removeChild(startMenu);\n\n    (0,_game_startGame__WEBPACK_IMPORTED_MODULE_0__.startGame)(name);\n  } else {\n    const nameContainer = document.getElementById(\"name-container\");\n\n    if (nameContainer.children.length >= 3) {\n      return;\n    }\n\n    const error = (0,_createErrorContainer__WEBPACK_IMPORTED_MODULE_1__.errorContainer)(\"Please enter a name!\");\n\n    nameContainer.appendChild(error);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/components/start.js?");

/***/ }),

/***/ "./src/js/game/end.js":
/*!****************************!*\
  !*** ./src/js/game/end.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"endingScreen\": () => (/* binding */ endingScreen)\n/* harmony export */ });\n/* harmony import */ var _components_createEndingScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/createEndingScreen */ \"./src/js/components/createEndingScreen.js\");\n\n\nfunction endingScreen(winner) {\n  (0,_components_createEndingScreen__WEBPACK_IMPORTED_MODULE_0__.createEndScreen)(winner);\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/game/end.js?");

/***/ }),

/***/ "./src/js/game/gameLoop.js":
/*!*********************************!*\
  !*** ./src/js/game/gameLoop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameLoop\": () => (/* binding */ gameLoop)\n/* harmony export */ });\n/* harmony import */ var _classes_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/player */ \"./src/js/classes/player.js\");\n/* harmony import */ var _components_createGameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/createGameLoop */ \"./src/js/components/createGameLoop.js\");\n/* harmony import */ var _end__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./end */ \"./src/js/game/end.js\");\n\n\n\n\nlet isPlayerTurn = true;\nlet move;\nlet waitingTurn = false;\nlet gameover = false;\n\nfunction gameLoop(playersGrid, player) {\n  (0,_components_createGameLoop__WEBPACK_IMPORTED_MODULE_1__.createGame)(playersGrid);\n  move = document.getElementById(\"move\");\n  const computer = new _classes_player__WEBPACK_IMPORTED_MODULE_0__.Player(\"Computer\");\n  computer.autoPlaceShips();\n\n  const enemyGrid = document.querySelectorAll(\"#enemy-grid .cell\");\n  enemyGrid.forEach((cell) =>\n    cell.addEventListener(\"click\", () =>\n      clickEventListeners(cell, computer, player)\n    )\n  );\n}\n\nfunction clickEventListeners(cell, computer, player) {\n  enemyClick(cell, computer, player.name);\n  enemyAttack(player);\n\n  if (cell.classList.contains(\"attacked\")) {\n    const clone = cell.cloneNode(true);\n    cell.replaceWith(clone);\n  }\n}\n\nfunction enemyClick(cell, computer, playerName) {\n  if (isPlayerTurn !== true || gameover) {\n    return;\n  }\n  isPlayerTurn = !isPlayerTurn;\n\n  const position = JSON.parse(cell.getAttribute(\"location\"));\n  const x = parseInt(position.x);\n  const y = parseInt(position.y);\n\n  const result = computer.incomingAttack(x, y);\n  modifyBoard(result, cell, playerName, \"the enemy\");\n  isGameOver(computer, playerName);\n}\n\nfunction enemyAttack(player) {\n  if (isPlayerTurn !== false || waitingTurn || gameover) {\n    return;\n  }\n  waitingTurn = true;\n  setTimeout(() => {\n    move.textContent = \"Awaiting enemy attack!\";\n    setTimeout(() => {\n      const result = player.randomAttack();\n      const lastMove = player.prevMoves.slice(-1)[0];\n\n      const element = document.querySelector(\n        `#player-grid [location=\\'{\"x\": \"${lastMove.x}\", \"y\": \"${lastMove.y}\"}\\']`\n      );\n      modifyBoard(result, element, \"The enemy\", \"our\");\n      isPlayerTurn = !isPlayerTurn;\n      waitingTurn = false;\n      isGameOver(player, \"Computer\");\n    }, 400);\n  }, 2000);\n}\n\nfunction modifyBoard(result, cell, name, target) {\n  switch (result) {\n    case \"sunk\": {\n      move.textContent = `${name} fire's into ${target} waters... ${name} sunk the ${target} ship!`;\n      cell.classList.add(\"attacked\", \"hit\");\n      cell.ariaLabel = \"hit\";\n      break;\n    }\n    case \"hit\": {\n      move.textContent = `${name} fire's into ${target} waters... ${name} hit the ${target} ship!`;\n      cell.classList.add(\"attacked\", \"hit\");\n      cell.ariaLabel = \"hit\";\n      break;\n    }\n    case \"missed\": {\n      move.textContent = `${name} fire's into ${target} waters... ${name} missed.`;\n      cell.classList.add(\"attacked\", \"miss\");\n      cell.ariaLabel = \"miss\";\n      break;\n    }\n  }\n}\n\nfunction isGameOver(player, name) {\n  const result = player.gameboard.isSunk();\n\n  if (!result) {\n    return;\n  }\n\n  gameover = true;\n\n  const main = document.querySelector(\"main\");\n  const container = document.getElementById(\"game-screen\");\n\n  main.removeChild(container);\n\n  (0,_end__WEBPACK_IMPORTED_MODULE_2__.endingScreen)(name);\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/game/gameLoop.js?");

/***/ }),

/***/ "./src/js/game/getAxis.js":
/*!********************************!*\
  !*** ./src/js/game/getAxis.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getOrientation\": () => (/* binding */ getOrientation)\n/* harmony export */ });\nfunction getOrientation() {\n  const orientationElement =\n    document.getElementById(\"current-axis\").textContent;\n  const axis = orientationElement.slice(-1);\n\n  switch (axis) {\n    case \"x\": {\n      return \"horizontal\";\n    }\n    case \"y\": {\n      return \"vertical\";\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/game/getAxis.js?");

/***/ }),

/***/ "./src/js/game/startGame.js":
/*!**********************************!*\
  !*** ./src/js/game/startGame.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startGame\": () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _components_createGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/createGame */ \"./src/js/components/createGame.js\");\n/* harmony import */ var _classes_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/player */ \"./src/js/classes/player.js\");\n/* harmony import */ var _getAxis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getAxis */ \"./src/js/game/getAxis.js\");\n/* harmony import */ var _components_createErrorContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/createErrorContainer */ \"./src/js/components/createErrorContainer.js\");\n/* harmony import */ var _components_placingElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/placingElement */ \"./src/js/components/placingElement.js\");\n/* harmony import */ var _game_gameLoop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game/gameLoop */ \"./src/js/game/gameLoop.js\");\n\n\n\n\n\n\n\nfunction startGame(name) {\n  let player = new _classes_player__WEBPACK_IMPORTED_MODULE_1__.Player(name);\n  (0,_components_createGame__WEBPACK_IMPORTED_MODULE_0__.createGame)(player.ships[0].length);\n\n  const cells = document.querySelectorAll(\".grid .cell\");\n  cells.forEach((cell) => {\n    cell.addEventListener(\"mouseover\", () => {\n      removeHoverClassFromCell(cells);\n      gridEventListener(cell, player.ships[0], player);\n    });\n    cell.addEventListener(\"click\", () => {\n      placeShip(cell, player);\n    });\n  });\n\n  const reset = document.getElementById(\"reset-button\");\n  reset.addEventListener(\"click\", () => {\n    player = new _classes_player__WEBPACK_IMPORTED_MODULE_1__.Player(name);\n    changeNextShip(player.ships[0]);\n\n    resetCells(cells);\n  });\n\n  const autoPlace = document.getElementById(\"auto-place-button\");\n  autoPlace.addEventListener(\"click\", () => {\n    removeHoverClassFromCell(cells);\n    placeAutoMode(player, cells);\n  });\n\n  const startButton = document.getElementById(\"start-game\");\n  startButton.addEventListener(\"click\", () => {\n    goToGameLoop(player);\n  });\n}\n\n/**\n *\n * @param {HTMLDivElement} cell\n * @param {*} ship\n */\nfunction gridEventListener(cell, ship, player) {\n  if (player.ships.length === 0) {\n    return;\n  }\n\n  const length = ship.length;\n  const axis = (0,_getAxis__WEBPACK_IMPORTED_MODULE_2__.getOrientation)();\n\n  const position = JSON.parse(cell.getAttribute(\"location\"));\n\n  const shipLengthArr = new Array(ship.length).fill(\" \");\n  let positionToInt = { x: parseInt(position.x), y: parseInt(position.y) };\n\n  if (\n    player.gameboard.checkOutOfBounds(shipLengthArr, positionToInt, axis) ===\n    \"collision\"\n  ) {\n    positionToInt = { x: parseInt(position.x), y: parseInt(position.y) };\n    goUntilError(positionToInt, axis, shipLengthArr, player);\n    return;\n  }\n\n  hoverOnShip(length, axis, position);\n}\n\n/**\n *\n * @param {NodeListOf<Element>} cells\n */\nfunction removeHoverClassFromCell(cells) {\n  cells.forEach((cell) => {\n    cell.classList.remove(\"hover-effect\");\n    cell.classList.remove(\"cell-error\");\n  });\n}\n\nfunction hoverOnShip(length, axis, position) {\n  for (let index = 0; index < length; index++) {\n    const element = document.querySelector(\n      `[location=\\'{\"x\": \"${position.x}\", \"y\": \"${position.y}\"}\\']`\n    );\n\n    element.classList.add(\"hover-effect\");\n\n    if (axis === \"vertical\") {\n      position.y++;\n    } else {\n      position.x++;\n    }\n  }\n}\n\nfunction goUntilError(position, axis, lengthArr, player) {\n  lengthArr.every(() => {\n    const startingPos = JSON.parse(JSON.stringify(position));\n\n    if (\n      player.gameboard.checkOutOfBounds([\" \"], position, axis) === \"collision\"\n    ) {\n      return false;\n    }\n\n    const element = document.querySelector(\n      `[location=\\'{\"x\": \"${startingPos.x}\", \"y\": \"${startingPos.y}\"}\\']`\n    );\n    element.classList.add(\"cell-error\");\n\n    if (axis === \"vertical\") {\n      startingPos.y++;\n    } else {\n      startingPos.x++;\n    }\n\n    position = startingPos;\n    return true;\n  });\n}\n\n/**\n *\n * @param {HTMLDivElement} cell\n * @param {Player} player\n */\nfunction placeShip(cell, player) {\n  if (player.ships.length === 0) {\n    return;\n  }\n\n  if (cell.classList.contains(\"error-cell\")) {\n    return;\n  }\n  const allHover = document.querySelectorAll(\".hover-effect\");\n  allHover.forEach((shipElement) => {\n    shipElement.classList.add(\"ship\");\n    shipElement.classList.remove(\"hover-effect\");\n  });\n\n  const position = JSON.parse(cell.getAttribute(\"location\"));\n  const axis = (0,_getAxis__WEBPACK_IMPORTED_MODULE_2__.getOrientation)();\n\n  player.placeShip(position.x, position.y, axis);\n  changeNextShip(player.ships[0]);\n}\n\nfunction resetCells(cells) {\n  cells.forEach((cell) => {\n    cell.classList.remove(\"ship\");\n    cell.classList.remove(\"hover-effect\");\n    cell.classList.remove(\"cell-error\");\n  });\n}\n\nfunction placeAutoMode(player) {\n  player.autoPlaceShips();\n\n  const gameboard = player.gameboard.gameboard;\n  for (let y = 0; y < gameboard.length; y++) {\n    const row = gameboard[y];\n    for (let x = 0; x < gameboard.length; x++) {\n      const cell = row[x];\n\n      if (typeof cell === \"object\") {\n        const element = document.querySelector(\n          `[location=\\'{\"x\": \"${x}\", \"y\": \"${y}\"}\\']`\n        );\n\n        element.classList.add(\"ship\");\n      }\n    }\n  }\n\n  changeNextShip(player.ships[0]);\n}\n\nfunction goToGameLoop(player) {\n  if (player.ships.length != 0) {\n    const startContainer = document.getElementById(\"start-game-container\");\n    const error = (0,_components_createErrorContainer__WEBPACK_IMPORTED_MODULE_3__.errorContainer)(\"Place all your ships before starting!\");\n\n    startContainer.prepend(error);\n    return;\n  }\n  const gridContainer = document\n    .querySelector(\".grid-container\")\n    .cloneNode(true);\n\n  const main = document.querySelector(\"main\");\n  const setupContainer = document.getElementById(\"setup-container\");\n  main.removeChild(setupContainer);\n\n  (0,_game_gameLoop__WEBPACK_IMPORTED_MODULE_5__.gameLoop)(gridContainer, player);\n}\n\nfunction changeNextShip(ship) {\n  removeWarning();\n\n  let length = 0;\n  if (typeof ship === \"object\") {\n    length = ship.length;\n  }\n\n  const previousShip = document.getElementById(\"next-ship\");\n  const nextShip = (0,_components_placingElement__WEBPACK_IMPORTED_MODULE_4__.placingElement)(length);\n\n  previousShip.replaceWith(nextShip);\n}\n\nfunction removeWarning() {\n  const errorContainer = document.getElementsByClassName(\"errorContainer\")[0];\n\n  if (errorContainer === undefined) {\n    return;\n  }\n\n  const startGameContainer = document.getElementById(\"start-game-container\");\n\n  startGameContainer.removeChild(errorContainer);\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/game/startGame.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/initial */ \"./src/js/components/initial.js\");\n/* harmony import */ var _components_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/start */ \"./src/js/components/start.js\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.scss */ \"./src/css/main.scss\");\n\n\n\n\n(0,_components_initial__WEBPACK_IMPORTED_MODULE_0__.start)();\n(0,_components_start__WEBPACK_IMPORTED_MODULE_1__.startMenu)();\n\n\n//# sourceURL=webpack://battleship/./src/js/index.js?");

/***/ }),

/***/ "./src/assets/github.svg":
/*!*******************************!*\
  !*** ./src/assets/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a6460254a26abce59deb.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/github.svg?");

/***/ }),

/***/ "./src/assets/warning.svg":
/*!********************************!*\
  !*** ./src/assets/warning.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e75ffae48c3a8837fb9d.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/warning.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;