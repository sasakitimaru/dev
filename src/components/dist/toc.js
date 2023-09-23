"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var tocbot_1 = require("tocbot");
var Toc = function () {
    var _a = react_1.useState(false), isClicked = _a[0], setIsClicked = _a[1];
    react_1.useEffect(function () {
        setIsClicked(window.innerWidth > 640);
        tocbot_1["default"].init({
            tocSelector: ".toc",
            contentSelector: ".post",
            headingSelector: "h2, h3, h4"
        });
        return function () { return tocbot_1["default"].destroy(); };
    }, []);
    return (React.createElement("div", { className: "lg:sticky flex-shrink-1 mx-auto sm:mx-4 top-20 p-4 m-4 rounded-lg cursor-pointer select-none w-80 sm:w-96 h-fit bg-white dark:bg-gray-800" },
        React.createElement("p", { className: "text-center text-2xl ml-4 font-bold relative\n      before:absolute\n      before:left-3\n      before:content-['\u25B6']\n      before:duration-300\n      " + (isClicked ? "before:rotate-90" : "before:rotate-0") + "\n      ", onClick: function () { return setIsClicked(!isClicked); } }, "\u76EE\u6B21"),
        React.createElement("nav", { className: "toc prose prose-xl dark:prose-invert prose-a:no-underline duration-300\n      " + (isClicked ? "block" : "hidden") + "\n      " })));
};
exports["default"] = Toc;
