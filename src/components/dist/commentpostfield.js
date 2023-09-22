"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var postgresAPI_1 = require("@/api/postgres/postgresAPI");
var react_1 = require("react");
var postgresAPI_2 = require("@/api/postgres/postgresAPI");
var comment_1 = require("./comment");
var CommentPostField = function (_a) {
    var articleId = _a.articleId, commentId = _a.commentId, isReply = _a.isReply, setIsClicked = _a.setIsClicked;
    var _b = react_1["default"].useState({
        article_id: articleId,
        replies: [],
        comment: "",
        author: ""
    }), comment = _b[0], setComment = _b[1];
    var _c = react_1["default"].useState({
        author: "",
        comment_id: commentId,
        comment: ""
    }), reply = _c[0], setReply = _c[1];
    var setComments = react_1.useContext(comment_1.CommentContext).setComments;
    var _d = react_1.useContext(comment_1.SnackOpenContext), setSuccessOpen = _d.setSuccessOpen, setErrorOpen = _d.setErrorOpen;
    var textareaRef = react_1.useRef(null);
    var inputRef = react_1.useRef(null);
    var clearSendedData = function () {
        setComment({ article_id: articleId, replies: [], comment: "", author: "" });
        setReply({ author: "", comment_id: commentId, comment: "" });
        textareaRef.current.value = "";
        inputRef.current.value = "";
        if (setIsClicked)
            setIsClicked(false);
    };
    var handleSubmit = function (content) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, e_1;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (((_b = content.comment) === null || _b === void 0 ? void 0 : _b.length) <= 5 || ((_c = content.comment) === null || _c === void 0 ? void 0 : _c.length) >= 100) {
                        alert("コメントは5文字以上100文字以下で入力してください。");
                        return [2 /*return*/];
                    }
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 7, , 8]);
                    if (!!isReply) return [3 /*break*/, 3];
                    return [4 /*yield*/, postgresAPI_1.createComment(content)];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, postgresAPI_1.createReply(content)];
                case 4:
                    _d.sent();
                    _d.label = 5;
                case 5:
                    setSuccessOpen(true);
                    clearSendedData();
                    _a = setComments;
                    return [4 /*yield*/, postgresAPI_2.getComments(articleId)];
                case 6:
                    _a.apply(void 0, [_d.sent()]);
                    return [3 /*break*/, 8];
                case 7:
                    e_1 = _d.sent();
                    setErrorOpen(true);
                    console.error("posting error:", e_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "flex flex-col" },
        react_1["default"].createElement("textarea", { className: "w-full h-28 px-4 p-4 bg-inherit outline-none no-overflow-anchoring resize-none border-b-[1px] border-gray-300 dark:border-gray-700 text-base", placeholder: "Comment", autoFocus: isReply, onChange: function (e) {
                isReply
                    ? setReply(__assign(__assign({}, reply), { comment: e.target.value }))
                    : setComment(__assign(__assign({}, comment), { comment: e.target.value }));
            }, ref: textareaRef }),
        react_1["default"].createElement("div", { className: "flex flex-row justify-between items-center mt-2" },
            react_1["default"].createElement("input", { type: "text", className: "w-28 h-10 px-4 p-4 bg-inherit outline-none border-b-[1px] border-gray-300 dark:border-gray-700 text-base placeholder:text-sm", placeholder: "Anonymous", onChange: function (e) {
                    isReply
                        ? setReply(__assign(__assign({}, reply), { author: e.target.value }))
                        : setComment(__assign(__assign({}, comment), { author: e.target.value }));
                }, ref: inputRef }),
            react_1["default"].createElement("button", { className: "bg-blue-400 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-800 text-white font-bold py-2 px-4 rounded", onClick: function () {
                    return isReply ? handleSubmit(reply) : handleSubmit(comment);
                } }, isReply ? "Reply" : "Submit"))));
};
exports["default"] = CommentPostField;
