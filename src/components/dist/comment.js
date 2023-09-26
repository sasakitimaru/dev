"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.SnackOpenContext = exports.CommentContext = void 0;
var react_1 = require("react");
var commentpostfield_1 = require("./commentpostfield");
var commentlist_1 = require("./commentlist");
var postgresAPI_1 = require("@/api/postgres/postgresAPI");
exports.CommentContext = react_1.createContext({});
exports.SnackOpenContext = react_1.createContext({});
var CommentField = function (_a) {
    var articleId = _a.articleId;
    var _b = react_1["default"].useState([]), comments = _b[0], setComments = _b[1];
    var _c = react_1["default"].useState(false), successOpen = _c[0], setSuccessOpen = _c[1];
    var _d = react_1["default"].useState(false), errorOpen = _d[0], setErrorOpen = _d[1];
    react_1.useEffect(function () {
        var getAndSetComments = function () { return __awaiter(void 0, void 0, void 0, function () {
            var comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, postgresAPI_1.getComments(articleId)];
                    case 1:
                        comments = _a.sent();
                        setComments(comments);
                        return [2 /*return*/];
                }
            });
        }); };
        getAndSetComments();
    }, [articleId]);
    return (react_1["default"].createElement("div", { className: "bg-white dark:bg-gray-800 w-full sm:rounded-lg prose prose-sm lg:prose-base dark:prose-invert p-4 mt-10 mb-10 mx-auto lg:mx-0 lg:px-8 " },
        react_1["default"].createElement(exports.CommentContext.Provider, { value: { comments: comments, setComments: setComments } },
            react_1["default"].createElement(exports.SnackOpenContext.Provider, { value: { successOpen: successOpen, errorOpen: errorOpen, setSuccessOpen: setSuccessOpen, setErrorOpen: setErrorOpen } },
                react_1["default"].createElement("p", { className: "mb-2 p-2 text-center te border-b-[1px] border-gray-300 dark:border-gray-700" }, "Conversation"),
                comments &&
                    comments.map(function (comment, index) {
                        var _a;
                        return (react_1["default"].createElement(react_1["default"].Fragment, { key: index },
                            react_1["default"].createElement(commentlist_1["default"], { content: comment, articleId: articleId }), (_a = comment.replies) === null || _a === void 0 ? void 0 :
                            _a.map(function (reply, index) { return (react_1["default"].createElement(react_1["default"].Fragment, { key: index },
                                react_1["default"].createElement(commentlist_1["default"], { content: reply, articleId: articleId, isEndOfReply: index + 1 === comment.replies.length }))); })));
                    }),
                react_1["default"].createElement(commentpostfield_1["default"], { articleId: articleId, isReply: false })))));
};
exports["default"] = CommentField;
