"use strict";
exports.__esModule = true;
var react_1 = require("react");
var tag_1 = require("./tag");
var link_1 = require("next/link");
var formatter_1 = require("@/lib/formatter");
var ArticleCardList = function (_a) {
    var articles = _a.articles;
    var isLatest = function (date) {
        var now = new Date();
        var articleDate = new Date(date);
        var diff = now.getTime() - articleDate.getTime();
        var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        return diffDays < 5;
    };
    return (react_1["default"].createElement("div", { className: "grid gap-y-8 sm:gap-16 grid-cols-1 justify-center items-center sm:grid-cols-2 mt-8 lg:mx-48" }, articles === null || articles === void 0 ? void 0 : articles.map(function (article, index) { return (react_1["default"].createElement(link_1["default"], { href: "/posts/" + article.slug, key: index, className: "flex flex-row items-center cursor-pointer" },
        react_1["default"].createElement("div", { className: "flex flex-shrink-0 justify-center items-center bg-white dark:bg-slate-600 rounded-lg w-20 h-20 indicator" },
            isLatest(article.date) && react_1["default"].createElement("span", { className: "indicator-item badge border-none text-white font-bold bg-blue-600 mr-2" }, "new"),
            react_1["default"].createElement("p", { className: "text-3xl sm:text-4xl" }, article.icon)),
        react_1["default"].createElement("div", { className: "flex flex-col ml-4" },
            react_1["default"].createElement("h2", { className: "text-lg sm:text-xl font-bold mb-2 line-clamp-2 w-full" }, article.title),
            react_1["default"].createElement("p", { className: "text-gray-400 text-sm" }, formatter_1.dateFormatter(article.date)),
            react_1["default"].createElement("div", { className: "inline-flex max-w-full overflow-hidden" },
                article.tags.slice(0, 2).map(function (tag, index) { return (react_1["default"].createElement(react_1["default"].Fragment, { key: index },
                    react_1["default"].createElement(tag_1["default"], { label: tag }))); }),
                article.tags.length > 2 && react_1["default"].createElement("p", { className: "self-end" }, "..."))))); })));
};
exports["default"] = ArticleCardList;
