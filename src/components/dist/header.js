"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var image_1 = require("next/image");
var react_1 = require("react");
var searchIcon_1 = require("./searchIcon");
var LocalOffer_1 = require("@mui/icons-material/LocalOffer");
var Search_1 = require("@mui/icons-material/Search");
var GitHub_1 = require("@mui/icons-material/GitHub");
var hamburger_react_1 = require("hamburger-react");
var Home_1 = require("@mui/icons-material/Home");
var Fab_1 = require("@mui/material/Fab");
var ArrowUpward_1 = require("@mui/icons-material/ArrowUpward");
var themeSwitch_1 = require("./themeSwitch");
var HeadeInfoListLargerThanSm = function () {
    return (react_1["default"].createElement("ul", { className: "text-xl text-center items-center lg:text-lg flex lg:pt-0" },
        react_1["default"].createElement("li", { className: "flex mr-4" },
            react_1["default"].createElement(themeSwitch_1["default"], null)),
        react_1["default"].createElement("li", null,
            react_1["default"].createElement(searchIcon_1["default"], null)),
        react_1["default"].createElement("li", null,
            react_1["default"].createElement(link_1["default"], { href: "/tags", className: "hover:opacity-75 cursor-pointer flex justify-center items-center" },
                react_1["default"].createElement(LocalOffer_1["default"], { className: "text-[20px] mr-1" }),
                react_1["default"].createElement("p", { className: "text-sm" }, "Tags"))),
        react_1["default"].createElement("li", { className: "block" },
            react_1["default"].createElement(link_1["default"], { href: "https://github.com/sasakitimaru", target: "blank" },
                react_1["default"].createElement(image_1["default"], { src: "/myLovelyCat.jpg", alt: "cat", className: "w-10 h-10 ml-4 overflow-hidden rounded-full", width: 1000, height: 1000 })))));
};
var InfoLink = function (_a) {
    var children = _a.children, setIsClicked = _a.setIsClicked, href = _a.href, target = _a.target;
    return (react_1["default"].createElement(link_1["default"], { href: href, className: "flex items-center gap-x-1 w-10/12 pb-1 mb-4", onClick: function () { return setIsClicked(false); }, target: target }, children));
};
function isScrollToBottom() {
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = document.documentElement.scrollTop;
    var clientHeight = document.documentElement.clientHeight;
    return scrollHeight - scrollTop === clientHeight;
}
var Header = function () {
    var _a = react_1.useState(false), isClicked = _a[0], setIsClicked = _a[1];
    var _b = react_1.useState(true), headerVisible = _b[0], setHeaderVisible = _b[1];
    var _c = react_1.useState(false), scrollTopButtonVisible = _c[0], setScrollTopButtonVisible = _c[1];
    var _d = react_1.useState(0), lastScrollTop = _d[0], setLastScrollTop = _d[1];
    var headerRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var handleScroll = function () {
            var scrollTop = window.scrollY || document.documentElement.scrollTop;
            setHeaderVisible(scrollTop < lastScrollTop || scrollTop <= 0);
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
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("nav", { className: "md:px-24 lg:px-32 px-6 bg-white dark:bg-gray-800 shadow-md flex flex-wrap items-center md:py-2 fixed z-30 w-full top-0 duration-100\n       " + (headerVisible ? "translate-y-0" : "-translate-y-full") + "\n       sm:translate-y-0\n      ", ref: headerRef },
            react_1["default"].createElement("div", { className: "flex-1 flex items-center" },
                react_1["default"].createElement(image_1["default"], { src: "/draw1.svg", alt: "homeicon", className: "w-10 h-10 overflow-hidden rounded-full", width: 100, height: 100 }),
                react_1["default"].createElement(link_1["default"], { href: "/", className: "m-3" },
                    react_1["default"].createElement("div", { className: "font-bold" }, "sasakiti-dev"))),
            react_1["default"].createElement("div", { className: "hidden md:flex flex-wrap items-center text-base justify-center" },
                react_1["default"].createElement(HeadeInfoListLargerThanSm, null)),
            react_1["default"].createElement("div", { className: "flex mr-4 md:hidden" },
                react_1["default"].createElement(themeSwitch_1["default"], null)),
            react_1["default"].createElement("button", { className: "md:hidden", "aria-label": "toggle menu", onClick: function () { return setIsClicked(!isClicked); } },
                react_1["default"].createElement(hamburger_react_1["default"], { toggled: isClicked, toggle: setIsClicked, size: 24 })),
            react_1["default"].createElement("aside", { className: "flex flex-col items-center justify-cente absolute top-full right-0 w-8/12 text-white\n      " + (isClicked ? "translate-x-0" : "translate-x-full") + " transition-all duration-500 ease-in-out" },
                react_1["default"].createElement("p", { className: "text-xl w-10/12 mt-4 mb-4 pl-4 relative \n            before:content-['']\n            before:absolute\n            before:top-0\n            before:left-0\n            before:w-1\n            before:h-full\n            before:bg-blue-500\n          " }, "Menu"),
                react_1["default"].createElement(InfoLink, { href: "/", setIsClicked: setIsClicked },
                    react_1["default"].createElement(Home_1["default"], null),
                    react_1["default"].createElement("span", { className: "text-md p-1" }, "Home")),
                react_1["default"].createElement(InfoLink, { href: "/search", setIsClicked: setIsClicked },
                    react_1["default"].createElement(Search_1["default"], null),
                    react_1["default"].createElement("span", { className: "text-md p-1" }, "Search")),
                react_1["default"].createElement(InfoLink, { href: "/tags", setIsClicked: setIsClicked },
                    react_1["default"].createElement(LocalOffer_1["default"], null),
                    react_1["default"].createElement("span", { className: "text-md p-1" }, "Tags")),
                react_1["default"].createElement(InfoLink, { href: "https://github.com/sasakitimaru", setIsClicked: setIsClicked, target: "blank" },
                    react_1["default"].createElement(GitHub_1["default"], null),
                    react_1["default"].createElement("span", { className: "text-md p-1" }, "Github")))),
        react_1["default"].createElement("div", { className: "fixed top-0 w-screen h-screen bg-black z-20 transition-all duration-300 " + (isClicked ? "opacity-75 visible" : "opacity-0 invisible"), onClick: function () { return setIsClicked(false); } }),
        react_1["default"].createElement(Fab_1["default"], { color: "primary", 
            // area-aria-label="scroll to top"
            className: "fixed bottom-10 left-10 z-30 bg-blue-500 transition-all duration-300 \n        " + (scrollTopButtonVisible ? "opacity-100 visible" : "opacity-0 invisible"), onClick: function () { return window.scrollTo({ top: 0, behavior: "smooth" }); } },
            react_1["default"].createElement(ArrowUpward_1["default"], null))));
};
exports["default"] = Header;
