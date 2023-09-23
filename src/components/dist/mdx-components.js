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
exports.Mdx = void 0;
var image_1 = require("next/image");
var hooks_1 = require("next-contentlayer/hooks");
var mdxComponents = {
    // Image,
    Image: function (props) { return React.createElement(image_1["default"], __assign({}, props, { alt: props.alt || " " })); }
};
function Mdx(_a) {
    var code = _a.code;
    var MDXContent = hooks_1.useMDXComponent(code);
    return React.createElement(MDXContent, { components: mdxComponents });
}
exports.Mdx = Mdx;
