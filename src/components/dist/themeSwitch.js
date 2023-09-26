"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var themebutton_1 = require("./themebutton");
var ThemeSwitch = function () {
    var _a = react_1["default"].useState({
        dark: true,
        light: false,
        system: false
    }), selected = _a[0], setSelected = _a[1];
    return (react_1["default"].createElement("label", { className: "swap swap-rotate" }, selected.light ? (react_1["default"].createElement(themebutton_1["default"], { mode: "dark", selected: selected, setSelected: setSelected })) : (react_1["default"].createElement(themebutton_1["default"], { mode: "light", selected: selected, setSelected: setSelected }))));
};
exports["default"] = ThemeSwitch;
