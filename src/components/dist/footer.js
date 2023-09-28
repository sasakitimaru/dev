"use strict";
exports.__esModule = true;
var react_1 = require("react");
var GitHub_1 = require("@mui/icons-material/GitHub");
var Twitter_1 = require("@mui/icons-material/Twitter");
var link_1 = require("next/link");
var LinkedIn_1 = require("@mui/icons-material/LinkedIn");
var Footer = function () {
    return (react_1["default"].createElement("div", { className: "flex flex-col items-center bg-white dark:bg-blue-950" },
        react_1["default"].createElement("footer", { className: "footer p-6 sm:p-10 max-w-6xl" },
            react_1["default"].createElement("div", { className: "flex flex-col justify-center items-center mx-auto" },
                react_1["default"].createElement("nav", { className: "md:place-self-center md:justify-self-end" },
                    react_1["default"].createElement("div", { className: "grid grid-flow-col gap-4" },
                        react_1["default"].createElement(link_1["default"], { href: "https://github.com/sasakitimaru", target: "blank", className: "flex flex-row justify-center items-center hover:opacity-50 cursor-pointer" },
                            react_1["default"].createElement(GitHub_1["default"], { fontSize: "medium" })),
                        react_1["default"].createElement(link_1["default"], { href: "https://twitter.com/sasakiti_maru", target: "blank", className: "flex flex-row justify-center items-center hover:opacity-50 cursor-pointer" },
                            react_1["default"].createElement(Twitter_1["default"], { fontSize: "medium" })),
                        react_1["default"].createElement(link_1["default"], { href: "https://www.linkedin.com/in/tomoya-ohki-35aa79213/", target: "blank", className: "flex flex-row justify-center items-center hover:opacity-50 cursor-pointer" },
                            react_1["default"].createElement(LinkedIn_1["default"], { fontSize: "medium" })))),
                react_1["default"].createElement("p", null, " \u00A9 2023 sasakitimaru All rights reserved.")),
            react_1["default"].createElement("nav", null,
                react_1["default"].createElement("header", { className: "footer-title" }, "Categories")),
            react_1["default"].createElement("nav", null,
                react_1["default"].createElement("header", { className: "footer-title" }, "Tags")),
            react_1["default"].createElement("nav", null,
                react_1["default"].createElement("header", { className: "footer-title" }, "Contact"),
                react_1["default"].createElement("a", { className: "link link-hover" }, "About"),
                react_1["default"].createElement("a", { className: "link link-hover" }, "Policy")))));
};
exports["default"] = Footer;
