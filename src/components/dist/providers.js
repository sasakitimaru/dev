"use client";
"use strict";
exports.__esModule = true;
exports.Providers = void 0;
var next_themes_1 = require("next-themes");
exports.Providers = function Providers(_a) {
    var children = _a.children;
    return (React.createElement(next_themes_1.ThemeProvider, { attribute: "class", defaultTheme: "dark", enableSystem: true, themes: ["light", "dark", "system"] }, children));
};
exports["default"] = exports.Providers;
