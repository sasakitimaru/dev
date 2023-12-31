import Providers from "@/components/providers";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTopButton from "@/components/scrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

const title = "ささきち開発ブログ";
const description =
  "バックエンドエンジニアの個人開発ブログです。適当に日常での技術的なものでもそうでなくても出来事を書き残してます。";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
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
      url: "https://github.com/sasakitimaru",
    },
  ],
  creator: "sasakitimiaru",
  twitter: {
    card: "summary",
    title,
    site: "@sasakiti_miaru",
    creator: "@sasakiti_miaru",
    images: process.env.NEXT_PUBLIC_BASE_URL! + "/draw1.svg",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3B82F6" },
    { media: "(prefers-color-scheme: dark)", color: "#3B82F6" },
  ],
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    title,
    description,
  },
  appleWebApp: {
    title,
    statusBarStyle: "default",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" bg-blue-700" suppressHydrationWarning>
      <meta
        name="google-site-verification"
        content="YYnLOmFRKGKait3EcIcuDRlp95PKkUiocLkLhcwIK3E"
      />
      <body
        className={`bg-blue-50 dark:bg-gray-900 w-full h-full ${inter.className}`}
      >
        <Providers>
          <Header />
          <main
            className={`flex flex-col pt-20 mb-10 sm:px-20 mx-auto max-w-screen-2xl
          ${cn("min-h-screen font-sans antialiased", fontSans.variable)}
          `}
          >
            {children}
            <Analytics />
          </main>
          <Footer />
        </Providers>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
