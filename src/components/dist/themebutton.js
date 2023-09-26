"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Brightness3_1 = require("@mui/icons-material/Brightness3");
var WbSunny_1 = require("@mui/icons-material/WbSunny");
var next_themes_1 = require("next-themes");
var ThemeButton = function (_a) {
    var mode = _a.mode, selected = _a.selected, setSelected = _a.setSelected;
    var _b = next_themes_1.useTheme(), theme = _b.theme, setTheme = _b.setTheme;
    var handleSetSelected = function (theme) {
        var _a;
        theme && setTheme(theme);
        setSelected((_a = {
                dark: false,
                light: false,
                system: false
            },
            _a[mode] = true,
            _a));
    };
    react_1.useEffect(function () {
        if (!mode)
            mode = "dark";
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { type: "checkbox" }),
        react_1["default"].createElement("svg", { className: "swap-on fill-current w-6 h-6", 
            // xmlns="http://www.w3.org/2000/svg"
            viewBox: "0 0 24 24", onClick: function () { return handleSetSelected("light"); } },
            react_1["default"].createElement(Brightness3_1["default"], { fontSize: "small" })),
        react_1["default"].createElement("svg", { className: "swap-off fill-current w-6 h-6", 
            // xmlns="http://www.w3.org/2000/svg"
            viewBox: "0 0 24 24", onClick: function () { return handleSetSelected("dark"); } },
            react_1["default"].createElement(WbSunny_1["default"], { fontSize: "small" }))));
};
exports["default"] = ThemeButton;
