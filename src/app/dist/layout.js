"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var providers_1 = require("@/components/providers");
require("./globals.css");
var utils_1 = require("@/lib/utils");
var fonts_1 = require("@/lib/fonts");
var google_1 = require("next/font/google");
var header_1 = require("@/components/header");
var footer_1 = require("@/components/footer");
var react_1 = require("@vercel/analytics/react");
var inter = google_1.Inter({ subsets: ["latin"] });
var title = "ささきち開発ブログ";
var description = "バックエンドエンジニアの個人開発ブログです。適当に日常での技術的なものでもそうでなくても出来事を書き残してます。";
exports.metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    title: {
        "default": title,
        template: "%s | " + title
    },
    description: description,
    keywords: [
        "Next.js",
        "JavaScript",
        "TypeScript",
        "React",
        "TailwindCSS",
        "contentlayer",
        "Vercel",
        "React-Native",
        "SIer",
        "バックエンドエンジニア",
        "個人開発",
        "ブログ",
        "フロントエンドエンジニア",
        "フロントエンド",
        "バックエンド",
        "フロントエンド開発",
        "バックエンド開発",
        "Web開発",
        "Webエンジニア",
        "Webアプリ",
        "Webサービス",
        "Webサイト",
        "App Router",
        "ささきちブログ",
        "ささきち",
        "sasakiti",
        "sasakitimaru",
    ],
    authors: [
        {
            name: "sasakitimiaru",
            url: "https://github.com/sasakitimaru"
        },
    ],
    creator: "sasakitimiaru",
    twitter: {
        card: "summary",
        title: title,
        site: "@sasakiti_miaru",
        creator: "@sasakiti_miaru",
        images: process.env.NEXT_PUBLIC_BASE_URL + "/draw1.svg"
    },
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#3B82F6" },
        { media: "(prefers-color-scheme: dark)", color: "#3B82F6" },
    ],
    openGraph: {
        type: "website",
        url: process.env.NEXT_PUBLIC_BASE_URL,
        title: title,
        description: description
    },
    appleWebApp: {
        title: title,
        statusBarStyle: "default"
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", className: " bg-blue-700", suppressHydrationWarning: true },
        React.createElement("meta", { name: "google-site-verification", content: "YYnLOmFRKGKait3EcIcuDRlp95PKkUiocLkLhcwIK3E" }),
        React.createElement("body", { className: "bg-blue-50 dark:bg-gray-900 w-full h-full " + inter.className },
            React.createElement(providers_1["default"], null,
                React.createElement(header_1["default"], null),
                React.createElement("main", { className: "flex flex-col pt-20 mb-10 sm:px-20 mx-auto max-w-screen-2xl\n          " + utils_1.cn("min-h-screen font-sans antialiased", fonts_1.fontSans.variable) + "\n          " },
                    children,
                    React.createElement(react_1.Analytics, null)),
                React.createElement(footer_1["default"], null)))));
}
exports["default"] = RootLayout;
