'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Fab_1 = require("@mui/material/Fab");
var ArrowUpward_1 = require("@mui/icons-material/ArrowUpward");
function isScrollToBottom() {
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = document.documentElement.scrollTop;
    var clientHeight = document.documentElement.clientHeight;
    return scrollHeight - scrollTop === clientHeight;
}
var ScrollToTopButton = function () {
    var _a = react_1.useState(false), scrollTopButtonVisible = _a[0], setScrollTopButtonVisible = _a[1];
    var _b = react_1.useState(0), lastScrollTop = _b[0], setLastScrollTop = _b[1];
    react_1.useEffect(function () {
        var handleScroll = function () {
            var scrollTop = window.scrollY || document.documentElement.scrollTop;
            setScrollTopButtonVisible(scrollTop < lastScrollTop || isScrollToBottom());
            setLastScrollTop(scrollTop);
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, [lastScrollTop]);
    react_1.useEffect(function () {
        var timerId = setTimeout(function () {
            setScrollTopButtonVisible(false);
        }, 3000);
        return function () { return clearTimeout(timerId); };
    }, [scrollTopButtonVisible]);
    return (react_1["default"].createElement(Fab_1["default"], { color: "primary", 
        // area-aria-label="scroll to top"
        className: "fixed bottom-10 right-10 z-30 bg-blue-500 transition-all duration-300 \n        " + (scrollTopButtonVisible ? "opacity-100 visible" : "opacity-0 invisible"), onClick: function () { return window.scrollTo({ top: 0, behavior: "smooth" }); } },
        react_1["default"].createElement(ArrowUpward_1["default"], null)));
};
exports["default"] = ScrollToTopButton;
