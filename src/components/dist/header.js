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
var HeadeInfoListLargerThanSm = function () {
    return (react_1["default"].createElement("ul", { className: "text-xl text-center items-center lg:text-lg flex lg:pt-0" },
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
    return (react_1["default"].createElement(link_1["default"], { href: href, className: "flex items-center gap-x-1 w-10/12 pb-1 mb-4 border-b custom-border", onClick: function () { return setIsClicked(false); }, target: target }, children));
};
var Header = function () {
    var _a = react_1["default"].useState(false), isClicked = _a[0], setIsClicked = _a[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("nav", { className: "md:px-24 lg:px-32 px-6 bg-white dark:bg-gray-800 shadow-md flex flex-wrap items-center md:py-2 fixed z-30 w-full top-0" },
            react_1["default"].createElement("div", { className: "flex-1 flex items-center" },
                react_1["default"].createElement(image_1["default"], { src: "/draw1.svg", alt: "homeicon", className: "w-10 h-10 overflow-hidden rounded-full", width: 100, height: 100 }),
                react_1["default"].createElement(link_1["default"], { href: "/", className: "m-3" },
                    react_1["default"].createElement("div", { className: "font-bold" }, "sasakiti-dev"))),
            react_1["default"].createElement("div", { className: "hidden md:flex flex-wrap items-center text-base justify-center" },
                react_1["default"].createElement(HeadeInfoListLargerThanSm, null)),
            react_1["default"].createElement("button", { className: "md:hidden", "aria-label": "toggle menu", onClick: function () { return setIsClicked(!isClicked); } },
                react_1["default"].createElement(hamburger_react_1["default"], { toggled: isClicked, toggle: setIsClicked, size: 24 })),
            react_1["default"].createElement("aside", { className: "flex flex-col items-center bg-inherit justify-cente shadow-sm absolute top-full right-0 h-screen w-8/12\n      " + (isClicked ? "translate-x-0" : "translate-x-full") + " transition-all duration-500 ease-in-out" },
                react_1["default"].createElement(InfoLink, { href: "/", setIsClicked: setIsClicked },
                    react_1["default"].createElement(Home_1["default"], null),
                    react_1["default"].createElement("span", { className: "text-md" }, "Home")),
                react_1["default"].createElement(InfoLink, { href: "/search", setIsClicked: setIsClicked },
                    react_1["default"].createElement(Search_1["default"], null),
                    react_1["default"].createElement("span", { className: "text-md" }, "Search")),
                react_1["default"].createElement(InfoLink, { href: "/tags", setIsClicked: setIsClicked },
                    react_1["default"].createElement(LocalOffer_1["default"], null),
                    react_1["default"].createElement("span", { className: "text-md" }, "Tags")),
                react_1["default"].createElement(InfoLink, { href: "https://github.com/sasakitimaru", setIsClicked: setIsClicked, target: "blank" },
                    react_1["default"].createElement(GitHub_1["default"], null),
                    react_1["default"].createElement("span", { className: "text-md" }, "Github")))),
        react_1["default"].createElement("div", { className: "fixed top-0 w-screen h-screen bg-black z-20 transition-all duration-300 " + (isClicked ? "opacity-50 visible" : "opacity-0 invisible"), onClick: function () { return setIsClicked(false); } })));
};
exports["default"] = Header;
