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
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var commentpostfield_1 = require("./commentpostfield");
var ChatBubbleOutline_1 = require("@mui/icons-material/ChatBubbleOutline");
var formatter_1 = require("@/lib/formatter");
var Snackbar_1 = require("@mui/material/Snackbar");
var Alert_1 = require("@mui/material/Alert");
var comment_1 = require("./comment");
var Alert = react_1["default"].forwardRef(function Alert(props, ref) {
    return react_1["default"].createElement(Alert_1["default"], __assign({ elevation: 6, ref: ref, variant: "filled" }, props));
});
var CommentList = function (_a) {
    var content = _a.content, articleId = _a.articleId, isEndOfReply = _a.isEndOfReply;
    var _b = react_1["default"].useState(false), isClicked = _b[0], setIsClicked = _b[1];
    var _c = react_1["default"].useContext(comment_1.SnackOpenContext), successOpen = _c.successOpen, errorOpen = _c.errorOpen, setSuccessOpen = _c.setSuccessOpen, setErrorOpen = _c.setErrorOpen;
    var formattedDate = formatter_1.dateFormatter(content.created_at);
    return (react_1["default"].createElement("div", { className: "flex flex-col border-b-[1px] relative border-gray-300 dark:border-gray-700 p-1\n    " + (content.isReply &&
            "before:absolute\n        before:content-['']\n        before:h-[70%]\n        before:w-[2px]\n        before:top-5\n        before:left-5\n        before:bg-gray-300\n        before:dark:bg-gray-500") + "\n    " },
        react_1["default"].createElement("div", { className: "flex items-center mt-2" },
            react_1["default"].createElement(material_1.Avatar, { className: "mr-2 h-8 w-8" }),
            react_1["default"].createElement("b", { className: "mr-1 text-xs" }, content.author),
            react_1["default"].createElement("p", { className: content.isReply ? "text-xs" : "" }, formattedDate)),
        react_1["default"].createElement("p", { className: content.isReply ? "ml-12" : "" }, content.comment),
        react_1["default"].createElement("div", { className: "bg-white dark:bg-gray-800 z-10" },
            content.isReply ? (isEndOfReply ? (react_1["default"].createElement("button", { className: "text-xs mr-auto mb-2 border rounded-lg border-gray-300 dark:border-gray-700 p-1", onClick: function () { return setIsClicked(!isClicked); } }, "Add Reply")) : (null)) : (react_1["default"].createElement("button", { className: "flex ml-auto mr-4 mb-4", onClick: function () { return setIsClicked(!isClicked); } },
                react_1["default"].createElement(ChatBubbleOutline_1["default"], { className: "items-end" }))),
            isClicked && (react_1["default"].createElement("div", { className: "mb-2" }, content.isReply ? (react_1["default"].createElement(commentpostfield_1["default"], { articleId: articleId, isReply: true, commentId: content.comment_id, setIsClicked: setIsClicked })) : (react_1["default"].createElement(commentpostfield_1["default"], { articleId: articleId, isReply: true, commentId: content.id, setIsClicked: setIsClicked }))))),
        react_1["default"].createElement(Snackbar_1["default"], { open: successOpen, autoHideDuration: 6000, onClose: function () { return setSuccessOpen(false); } },
            react_1["default"].createElement(Alert, { severity: "success", sx: { width: '100%' } }, "Message sended successfully!")),
        react_1["default"].createElement(Snackbar_1["default"], { open: errorOpen, autoHideDuration: 6000, onClose: function () { return setErrorOpen(false); } },
            react_1["default"].createElement(Alert, { onClose: function () { return setErrorOpen(false); }, severity: "error", sx: { width: '100%' } }, "Error occured when sending message. Please try again later."))));
};
exports["default"] = CommentList;
