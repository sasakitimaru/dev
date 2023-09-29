"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var ShowAllCommand = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("p", { className: "ml-2" }, "framework"),
        react_1["default"].createElement(SkillsframeworkCommand, null),
        react_1["default"].createElement("p", { className: "ml-2" }, "language"),
        react_1["default"].createElement(SkillslanguageCommand, null),
        react_1["default"].createElement("p", { className: "ml-2" }, "contact"),
        react_1["default"].createElement(ContactCommand, null)));
};
var AliasCommand = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("p", { className: "ml-2" }, "Here are some commands you can try"),
        react_1["default"].createElement("p", { className: "ml-2" }, "show all"),
        react_1["default"].createElement("p", { className: "ml-2" }, "ls skills"),
        react_1["default"].createElement("p", { className: "ml-2" }, "ls skills/language"),
        react_1["default"].createElement("p", { className: "ml-2" }, "ls skills/framework"),
        react_1["default"].createElement("p", { className: "ml-2" }, "ls contact")));
};
var SkillsCommand = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: " text-green-200" },
            react_1["default"].createElement("p", { className: "text-lg m-2" }, "> language"),
            react_1["default"].createElement("p", { className: "text-lg m-2" }, "> framework"))));
};
var SkillslanguageCommand = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: " text-blue-300" },
            react_1["default"].createElement("p", { className: "text-lg m-2" }, "> TypeScript"),
            react_1["default"].createElement("p", { className: "text-lg m-2" }, "> Java"))));
};
var SkillsframeworkCommand = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "text-red-300" },
            react_1["default"].createElement("p", { className: "text-lg m-2" }, "> React"),
            react_1["default"].createElement("p", { className: "text-lg m-2" }, "> Next.js"),
            react_1["default"].createElement("p", { className: "text-lg m-2" }, "> Tailwind CSS"),
            react_1["default"].createElement("p", { className: "text-lg m-2" }, "> Spring Boot"))));
};
var ContactCommand = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: " text-purple-300 flex flex-col" },
            react_1["default"].createElement(link_1["default"], { href: "https://github.com/sasakitimaru", className: "text-lg m-2 text-inherit w-fit", target: "blank" }, "> Github"),
            react_1["default"].createElement(link_1["default"], { href: "https://twitter.com/sasakiti_maru", className: "text-lg m-2 text-inherit w-fit", target: "blank" }, "> Twitter"),
            react_1["default"].createElement(link_1["default"], { href: "https://www.linkedin.com/in/tomoya-ohki-35aa79213/", className: "text-lg m-2 text-inherit w-fit", target: "blank" }, "> Linkedin"))));
};
var Terminal = function () {
    var _a = react_1["default"].useState(""), inputValue = _a[0], setInputValue = _a[1];
    var _b = react_1["default"].useState([]), commandHistory = _b[0], setCommandHistory = _b[1];
    var _c = react_1["default"].useState(0), commandHistoryIndex = _c[0], setCommandHistoryIndex = _c[1];
    var _d = react_1["default"].useState([]), commandElements = _d[0], setCommandElements = _d[1];
    var _e = react_1["default"].useState(false), isFocus = _e[0], setIsFocus = _e[1];
    var inputRef = react_1["default"].useRef(null);
    var title = "sasakiti-dev@Mac-mini";
    var setValueToInputRef = function (value) {
        if (inputRef.current != null) {
            inputRef.current.value = value;
            inputRef.current.focus();
        }
    };
    function scrollToBottomOfConsole() {
        var consoleElement = document.getElementById("console");
        if (consoleElement) {
            consoleElement.scrollTop = consoleElement.scrollHeight;
        }
    }
    react_1.useEffect(function () {
        scrollToBottomOfConsole();
    }, [commandElements]);
    var handleKeyDown = function (e) {
        if (e.key === "Enter") {
            doSelectedCommand();
            setInputValue("");
            setValueToInputRef("");
        }
        // 上矢印キーで履歴を遡る
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistoryIndex > 0) {
                var newIndex = commandHistoryIndex - 1;
                setCommandHistoryIndex(newIndex);
                var currentCommand = commandHistory[newIndex];
                setInputValue(currentCommand);
                setValueToInputRef(currentCommand);
            }
            else {
                setCommandHistoryIndex(0);
            }
        }
        // 下矢印キーで履歴を進める
        if (e.key === "ArrowDown") {
            if (commandHistoryIndex < commandHistory.length - 1) {
                var newIndex = commandHistoryIndex + 1;
                setCommandHistoryIndex(newIndex);
                var currentCommand = commandHistory[newIndex];
                setInputValue(currentCommand);
                setValueToInputRef(currentCommand);
            }
            else {
                setCommandHistoryIndex(commandHistory.length);
                setInputValue("");
                setValueToInputRef("");
            }
        }
    };
    var doSelectedCommand = function () {
        setCommandHistory(function (prev) { return __spreadArrays(prev, [inputValue]); });
        setCommandHistoryIndex(commandHistory.length + 1);
        switch (inputValue) {
            case "show all":
                setCommandElements(function (prev) { return __spreadArrays(prev, [
                    react_1["default"].createElement(ShowAllCommand, { key: prev.length }),
                ]); });
                break;
            case "alias":
                setCommandElements(function (prev) { return __spreadArrays(prev, [
                    react_1["default"].createElement(AliasCommand, { key: prev.length }),
                ]); });
                break;
            case "ls skills":
                setCommandElements(function (prev) { return __spreadArrays(prev, [
                    react_1["default"].createElement(SkillsCommand, { key: prev.length }),
                ]); });
                break;
            case "ls skills/language":
                setCommandElements(function (prev) { return __spreadArrays(prev, [
                    react_1["default"].createElement(SkillslanguageCommand, { key: prev.length }),
                ]); });
                break;
            case "ls skills/framework":
                setCommandElements(function (prev) { return __spreadArrays(prev, [
                    react_1["default"].createElement(SkillsframeworkCommand, { key: prev.length }),
                ]); });
                break;
            case "ls contact":
                setCommandElements(function (prev) { return __spreadArrays(prev, [
                    react_1["default"].createElement(ContactCommand, { key: prev.length }),
                ]); });
                break;
            default:
                setCommandElements(function (prev) { return __spreadArrays(prev, [
                    react_1["default"].createElement("p", { key: prev.length, className: "ml-2" }, "zsh: command not found: " + inputValue),
                ]); });
                break;
        }
    };
    return (react_1["default"].createElement("div", { className: "w-full mx-auto mt-10" },
        react_1["default"].createElement("div", { className: "w-full shadow-md subpixel-antialiased rounded-lg bg-black border-black mx-auto" },
            react_1["default"].createElement("div", { className: "flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black", id: "headerTerminal" },
                react_1["default"].createElement("div", { className: "flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3", id: "closebtn" }),
                react_1["default"].createElement("div", { className: "ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3", id: "minbtn" }),
                react_1["default"].createElement("div", { className: "ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3", id: "maxbtn" }),
                react_1["default"].createElement("div", { className: "mx-auto pr-16", id: "terminaltitle" },
                    react_1["default"].createElement("p", { className: "text-center" }, title))),
            react_1["default"].createElement("div", { className: "p-1 h-[610px]  text-white font-mono text-xs bg-black rounded-b-lg overflow-y-auto", id: "console", onClick: function () {
                    if (inputRef.current != null)
                        inputRef.current.focus();
                } },
                react_1["default"].createElement("p", { className: "m-2" }, "Last login: Wed May 26 10:30:00 on console"),
                react_1["default"].createElement("div", { className: "flex flex-col" },
                    react_1["default"].createElement("p", { className: "m-2 flex-shrink-0" }, "Mac-mini:~ sasakiti$ show all"),
                    react_1["default"].createElement(ShowAllCommand, null),
                    commandElements.map(function (commandElement, index) { return (react_1["default"].createElement("div", { key: index },
                        react_1["default"].createElement("p", { className: "m-2 flex-shrink-0" }, "Mac-mini:~ sasakiti$ " + commandHistory[index]),
                        commandElement)); })),
                react_1["default"].createElement("div", { className: "flex items-center" },
                    react_1["default"].createElement("p", { className: "m-2 flex-shrink-0" }, "Mac-mini:~ sasakiti$"),
                    react_1["default"].createElement("div", { className: "w-full" },
                        react_1["default"].createElement("input", { className: "ml-1 bg-inherit outline-none w-full border-l-4\n                " + (isFocus ? "caret-white border-none" : "animate-blinkBorder"), value: inputValue, ref: inputRef, onChange: function (e) { return setInputValue(e.target.value); }, onKeyDown: handleKeyDown, onFocus: function () { return setIsFocus(true); }, onBlur: function () { return setIsFocus(false); }, placeholder: "" + (!isFocus ? "alias: show all command" : "") })))))));
};
exports["default"] = Terminal;
