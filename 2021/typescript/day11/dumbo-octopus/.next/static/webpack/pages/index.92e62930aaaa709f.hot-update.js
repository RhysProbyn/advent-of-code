"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _env_testInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env/testInput.js */ \"./src/env/testInput.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n // Relative path to your File\n\nconsole.log(_env_testInput_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar file = _env_testInput_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nvar octopiMatrix = file.split(\"\\n\").map(function(x) {\n    return x.trim().split(\"\").map(function(y) {\n        return y.trim();\n    }).map(function(z) {\n        return parseInt(z);\n    });\n});\nconsole.log(octopiMatrix);\nvar increaseEnergy = function(matrix) {\n    return matrix.map(function(row, xIndex) {\n        return row.map(function(column, yindex) {\n            var right = 9;\n            var left = 9;\n            var up = 9;\n            var down = 9;\n            if (!(column === row.length - 1)) {\n                right = row[xIndex + 1];\n            }\n            if (!(column === 0)) {\n                left = row[xIndex - 1];\n            }\n            if (!(xIndex === matrix.length - 1)) {\n                up = matrix[yindex + 1][column];\n            }\n            if (!(xIndex === 0)) {\n                down = matrix[yindex - 1][column];\n            }\n            return num + 1;\n        });\n    });\n};\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(octopiMatrix), octoMatrix = ref[0], setOctoMatrix = ref[1];\n    // init()\n    var handleIterate = function() {\n        setOctoMatrix(increaseEnergy(octoMatrix));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Dumbo Octopus\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create-t3-app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto flex flex-col items-center justify-center min-h-screen p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-purple-300\",\n                                children: \"Dumbo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this),\n                            \" Octopus\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-2xl text-gray-700\",\n                        children: \"This stack uses:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        onClick: handleIterate,\n                        text: \"iterate\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OctupusGrid, {\n                            matrix: octoMatrix\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 14\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TechnologyCard, {\n                                name: \"NextJS\",\n                                description: \"The React framework for production\",\n                                documentation: \"https://nextjs.org/\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TechnologyCard, {\n                                name: \"TypeScript\",\n                                description: \"Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale\",\n                                documentation: \"https://www.typescriptlang.org/\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TechnologyCard, {\n                                name: \"TailwindCSS\",\n                                description: \"Rapidly build modern websites without ever leaving your HTML\",\n                                documentation: \"https://tailwindcss.com/\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TechnologyCard, {\n                                name: \"tRPC\",\n                                description: \"End-to-end typesafe APIs made easy\",\n                                documentation: \"https://trpc.io/\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TechnologyCard, {\n                                name: \"Next-Auth\",\n                                description: \"Authentication for Next.js\",\n                                documentation: \"https://next-auth.js.org/\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TechnologyCard, {\n                                name: \"Prisma\",\n                                description: \"Build data-driven JavaScript & TypeScript apps in less time\",\n                                documentation: \"https://www.prisma.io/docs/\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"tL48WHYkLOG5RvMg8u76okQO0B8=\");\n_c = Home;\nvar Button = function(param) {\n    var onClick = param.onClick, _$text = param.text;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        children: _$text\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 98,\n        columnNumber: 51\n    }, _this);\n};\n_c1 = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar TechnologyCard = function(param) {\n    var name = param.name, description = param.description, documentation = param.documentation;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-lg text-gray-700\",\n                children: name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-gray-600\",\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2\",\n                href: documentation,\n                target: \"_blank\",\n                rel: \"noreferrer\",\n                children: \"Documentation\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, _this);\n};\n_c2 = TechnologyCard;\nvar Octopus = function(param) {\n    var energyLevel = param.energyLevel;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3\",\n        children: energyLevel\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 135,\n        columnNumber: 3\n    }, _this);\n};\n_c3 = Octopus;\nvar OctupusGrid = function(param) {\n    var matrix = param.matrix;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row\",\n        children: matrix.map(function(numArray, yindex) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                children: numArray.map(function(num1, xindex) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"border-gray-500 w-10 h-10 \",\n                        children: num1\n                    }, xindex + \",\" + yindex, false, {\n                        fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 49\n                    }, _this);\n                })\n            }, yindex.toString(), false, {\n                fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 150,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rhys.Probyn\\\\git\\\\advent-of-code\\\\2021\\\\typescript\\\\day11\\\\dumbo-octopus\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 147,\n        columnNumber: 5\n    }, _this);\n};\n_c4 = OctupusGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Button\");\n$RefreshReg$(_c2, \"TechnologyCard\");\n$RefreshReg$(_c3, \"Octopus\");\n$RefreshReg$(_c4, \"OctupusGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TixTQUFTLEVBQUMsMERBQTBEO2tCQUN0RWlCLFdBQVc7Ozs7O2FBQ1IsQ0FBRztDQUVWO0FBTktELE1BQUFBLE9BQU87QUFXYixJQUFNVCxXQUFXLEdBQUcsZ0JBQThCO1FBQTNCOUIsTUFBTSxTQUFOQSxNQUFNO0lBRXpCLHFCQUNBLDhEQUFDNkIsS0FBRztRQUFDTixTQUFTLEVBQUMsZUFBZTtrQkFDM0J2QixNQUFNLENBQUNQLEdBQUcsQ0FBQyxTQUFDZ0QsUUFBUSxFQUFDckMsTUFBTSxFQUFHO1lBQzdCLHFCQUNFLDhEQUFDc0MsSUFBRTswQkFDQUQsUUFBUSxDQUFDaEQsR0FBRyxDQUFDLFNBQUNpQixJQUFHLEVBQUNpQyxNQUFNLEVBQUc7b0JBQUMscUJBQU8sOERBQUNDLElBQUU7d0JBQUNyQixTQUFTLEVBQUMsNEJBQTRCO2tDQUEwQmIsSUFBRzt1QkFBdkJpQyxNQUFNLEdBQUMsR0FBRyxHQUFDdkMsTUFBTTs7Ozs2QkFBWTtpQkFBQyxDQUFDO2VBRDVHQSxNQUFNLENBQUN5QyxRQUFRLEVBQUU7Ozs7cUJBRXJCLENBQ047U0FDRixDQUFDOzs7OzthQUNFLENBQ0w7Q0FHSjtBQWZLZixNQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHR5cGUgfSBmcm9tIFwib3NcIjtcbmltcG9ydCB0ZXh0IGZyb20gJy4uL2Vudi90ZXN0SW5wdXQuanMnOyAvLyBSZWxhdGl2ZSBwYXRoIHRvIHlvdXIgRmlsZVxuaW1wb3J0IFJlYWN0LHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnNvbGUubG9nKHRleHQpOyBcblxuXG5jb25zdCBmaWxlOiBzdHJpbmcgPSB0ZXh0O1xuY29uc3Qgb2N0b3BpTWF0cml4OiBudW1iZXJbXVtdID0gZmlsZS5zcGxpdChcIlxcblwiKS5tYXAoKHgpID0+IHgudHJpbSgpLnNwbGl0KFwiXCIpLm1hcCh5PT55LnRyaW0oKSkubWFwKHo9PnBhcnNlSW50KHopKSk7XG5jb25zb2xlLmxvZyhvY3RvcGlNYXRyaXgpO1xuY29uc3QgaW5jcmVhc2VFbmVyZ3kgPSAobWF0cml4Om51bWJlcltdW10pID0+ICB7XG4gIHJldHVybiBtYXRyaXgubWFwKChyb3cseEluZGV4KSA9PiByb3cubWFwKChjb2x1bW4seWluZGV4ICk9PiB7XG4gICAgbGV0IHJpZ2h0ID0gOTtcbiAgICBsZXQgbGVmdCA9IDk7XG4gICAgbGV0IHVwID0gOTtcbiAgICBsZXQgZG93biA9IDk7XG4gICAgaWYgKCEoY29sdW1uID09PSByb3cubGVuZ3RoIC0gMSkpIHtcbiAgICAgIHJpZ2h0ID0gcm93W3hJbmRleCArIDFdITtcbiAgICB9XG4gICAgaWYgKCEoY29sdW1uID09PSAwKSkge1xuICAgICAgbGVmdCA9IHJvd1t4SW5kZXggLSAxXSE7XG4gICAgfVxuICAgIGlmICghKHhJbmRleCA9PT0gbWF0cml4Lmxlbmd0aCAtIDEpKSB7XG4gICAgICB1cCA9IG1hdHJpeFt5aW5kZXggKyAxXSFbY29sdW1uXSE7XG4gICAgfVxuICAgIGlmICghKHhJbmRleCA9PT0gMCkpIHtcbiAgICAgIGRvd24gPSBtYXRyaXhbeWluZGV4IC0gMV0hW2NvbHVtbl0hO1xuICAgIH1cbiAgICByZXR1cm4gbnVtICsgMTtcbiAgfSkpO1xufVxuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW29jdG9NYXRyaXgsc2V0T2N0b01hdHJpeF0gPSB1c2VTdGF0ZShvY3RvcGlNYXRyaXgpXG4gIC8vIGluaXQoKVxuICBjb25zdCBoYW5kbGVJdGVyYXRlID0gKCkgPT4ge1xuICAgIHNldE9jdG9NYXRyaXgoaW5jcmVhc2VFbmVyZ3kob2N0b01hdHJpeCkpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkR1bWJvIE9jdG9wdXM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZS10My1hcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBwLTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIG1kOnRleHQtWzVyZW1dIGxlYWRpbmctbm9ybWFsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS0zMDBcIj5EdW1ibzwvc3Bhbj4gT2N0b3B1c1xuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktNzAwXCI+VGhpcyBzdGFjayB1c2VzOjwvcD5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVJdGVyYXRlfSB0ZXh0PXtcIml0ZXJhdGVcIn0gLz5cbiAgICAgICAgPGRpdj48T2N0dXB1c0dyaWQgbWF0cml4PXtvY3RvTWF0cml4fSAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgcHQtMyBtdC0zIHRleHQtY2VudGVyIG1kOmdyaWQtY29scy0zIGxnOnctMi8zXCI+XG4gICAgICAgICAgPFRlY2hub2xvZ3lDYXJkXG4gICAgICAgICAgICBuYW1lPVwiTmV4dEpTXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIFJlYWN0IGZyYW1ld29yayBmb3IgcHJvZHVjdGlvblwiXG4gICAgICAgICAgICBkb2N1bWVudGF0aW9uPVwiaHR0cHM6Ly9uZXh0anMub3JnL1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGVjaG5vbG9neUNhcmRcbiAgICAgICAgICAgIG5hbWU9XCJUeXBlU2NyaXB0XCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU3Ryb25nbHkgdHlwZWQgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgdGhhdCBidWlsZHMgb24gSmF2YVNjcmlwdCwgZ2l2aW5nIHlvdSBiZXR0ZXIgdG9vbGluZyBhdCBhbnkgc2NhbGVcIlxuICAgICAgICAgICAgZG9jdW1lbnRhdGlvbj1cImh0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRlY2hub2xvZ3lDYXJkXG4gICAgICAgICAgICBuYW1lPVwiVGFpbHdpbmRDU1NcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSYXBpZGx5IGJ1aWxkIG1vZGVybiB3ZWJzaXRlcyB3aXRob3V0IGV2ZXIgbGVhdmluZyB5b3VyIEhUTUxcIlxuICAgICAgICAgICAgZG9jdW1lbnRhdGlvbj1cImh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGVjaG5vbG9neUNhcmRcbiAgICAgICAgICAgIG5hbWU9XCJ0UlBDXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRW5kLXRvLWVuZCB0eXBlc2FmZSBBUElzIG1hZGUgZWFzeVwiXG4gICAgICAgICAgICBkb2N1bWVudGF0aW9uPVwiaHR0cHM6Ly90cnBjLmlvL1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGVjaG5vbG9neUNhcmRcbiAgICAgICAgICAgIG5hbWU9XCJOZXh0LUF1dGhcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBdXRoZW50aWNhdGlvbiBmb3IgTmV4dC5qc1wiXG4gICAgICAgICAgICBkb2N1bWVudGF0aW9uPVwiaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGVjaG5vbG9neUNhcmRcbiAgICAgICAgICAgIG5hbWU9XCJQcmlzbWFcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJCdWlsZCBkYXRhLWRyaXZlbiBKYXZhU2NyaXB0ICYgVHlwZVNjcmlwdCBhcHBzIGluIGxlc3MgdGltZVwiXG4gICAgICAgICAgICBkb2N1bWVudGF0aW9uPVwiaHR0cHM6Ly93d3cucHJpc21hLmlvL2RvY3MvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbnR5cGUgQnV0dG9uUHJvcHMgPSB7XG4gIG9uQ2xpY2s6IGFueTtcbiAgdGV4dDogc3RyaW5nO1xufTtcblxuY29uc3QgQnV0dG9uID0gKHsgb25DbGljaywgdGV4dCB9OkJ1dHRvblByb3BzKSA9PiA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9Pnt0ZXh0fTwvYnV0dG9uPjtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxudHlwZSBUZWNobm9sb2d5Q2FyZFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50YXRpb246IHN0cmluZztcbn07XG5cbmNvbnN0IFRlY2hub2xvZ3lDYXJkID0gKHtcbiAgbmFtZSxcbiAgZGVzY3JpcHRpb24sXG4gIGRvY3VtZW50YXRpb24sXG59OiBUZWNobm9sb2d5Q2FyZFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBwLTYgZHVyYXRpb24tNTAwIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkIHNoYWRvdy14bCBtb3Rpb24tc2FmZTpob3ZlcjpzY2FsZS0xMDVcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS03MDBcIj57bmFtZX08L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1zbSB1bmRlcmxpbmUgdGV4dC12aW9sZXQtNTAwIGRlY29yYXRpb24tZG90dGVkIHVuZGVybGluZS1vZmZzZXQtMlwiXG4gICAgICAgIGhyZWY9e2RvY3VtZW50YXRpb259XG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgPlxuICAgICAgICBEb2N1bWVudGF0aW9uXG4gICAgICA8L2E+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxudHlwZSBPY3RvcHVzUHJvcHMgPSB7XG4gIGVuZXJneUxldmVsOiBudW1iZXI7XG59O1xuXG5jb25zdCBPY3RvcHVzID0gKHtlbmVyZ3lMZXZlbH06T2N0b3B1c1Byb3BzKSA9PntcbiAgcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0zIHB0LTMgbXQtMyB0ZXh0LWNlbnRlciBtZDpncmlkLWNvbHMtMyBsZzp3LTIvM1wiPlxuICAgIHtlbmVyZ3lMZXZlbH0gIFxuICA8L2Rpdj4gIClcblxufVxuXG50eXBlIE9jdG9wdXNHcmlkUHJvcHMgPSB7XG4gIG1hdHJpeDogbnVtYmVyW11bXTtcbn07XG5jb25zdCBPY3R1cHVzR3JpZCA9ICgge21hdHJpeH06T2N0b3B1c0dyaWRQcm9wcyk9PntcbiAgXG4gICAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAge21hdHJpeC5tYXAoKG51bUFycmF5LHlpbmRleCk9PntcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgIDxvbCBrZXk9e3lpbmRleC50b1N0cmluZygpfT5cbiAgICAgICAgICAgIHtudW1BcnJheS5tYXAoKG51bSx4aW5kZXgpPT57cmV0dXJuIDxsaSBjbGFzc05hbWU9XCJib3JkZXItZ3JheS01MDAgdy0xMCBoLTEwIFwiIGtleT17eGluZGV4K1wiLFwiK3lpbmRleH0+e251bX08L2xpPn0pfVxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICAgIClcbiAgIFxuXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJ0ZXh0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwib2N0b3BpTWF0cml4Iiwic3BsaXQiLCJtYXAiLCJ4IiwidHJpbSIsInkiLCJ6IiwicGFyc2VJbnQiLCJpbmNyZWFzZUVuZXJneSIsIm1hdHJpeCIsInJvdyIsInhJbmRleCIsImNvbHVtbiIsInlpbmRleCIsInJpZ2h0IiwibGVmdCIsInVwIiwiZG93biIsImxlbmd0aCIsIm51bSIsIkhvbWUiLCJvY3RvTWF0cml4Iiwic2V0T2N0b01hdHJpeCIsImhhbmRsZUl0ZXJhdGUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsInAiLCJCdXR0b24iLCJvbkNsaWNrIiwiZGl2IiwiT2N0dXB1c0dyaWQiLCJUZWNobm9sb2d5Q2FyZCIsImRlc2NyaXB0aW9uIiwiZG9jdW1lbnRhdGlvbiIsImJ1dHRvbiIsInNlY3Rpb24iLCJoMiIsImEiLCJ0YXJnZXQiLCJPY3RvcHVzIiwiZW5lcmd5TGV2ZWwiLCJudW1BcnJheSIsIm9sIiwieGluZGV4IiwibGkiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});