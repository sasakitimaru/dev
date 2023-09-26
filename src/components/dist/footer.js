"use strict";
exports.__esModule = true;
var react_1 = require("react");
var GitHub_1 = require("@mui/icons-material/GitHub");
var Twitter_1 = require("@mui/icons-material/Twitter");
var link_1 = require("next/link");
var Footer = function () {
    return (react_1["default"].createElement("footer", { className: "flex flex-col justify-center items-center w-full border-t bg-white dark:bg-slate-900" },
        react_1["default"].createElement("div", { className: "flex flex-row justify-center items-center my-4" },
            react_1["default"].createElement(link_1["default"], { href: "https://github.com/sasakitimaru", target: "blank", className: "flex flex-row justify-center items-center hover:opacity-50 mr-4 cursor-pointer" },
                react_1["default"].createElement(GitHub_1["default"], { fontSize: "large" })),
            react_1["default"].createElement(link_1["default"], { href: "https://twitter.com/sasakiti_maru", target: "blank", className: "flex flex-row justify-center items-center hover:opacity-50 cursor-pointer" },
                react_1["default"].createElement(Twitter_1["default"], { fontSize: "large" }))),
        react_1["default"].createElement("p", { className: "text-sm text-gray-600 dark:text-gray-300 mb-4" }, "\u00A9 2023 sasakitimaru All rights reserved.")));
};
exports["default"] = Footer;
