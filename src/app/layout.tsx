import Providers from "@/components/providers";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const title = "sasakiti development blog";
const description = "バックエンドエンジニアの個人開発ブログ";

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
  ],
  authors: [
    {
      name: "sasakitimiaru",
      url: "https://github.com/sasakitimaru",
    },
  ],
  creator: "sasakitimiaru",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-blue-50 dark:bg-gray-900 ${inter.className}`}>
        <Providers>
          <Header />
          <main
            className={cn(
              "min-h-screen font-sans antialiased",
              fontSans.variable
            )}
          >
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
