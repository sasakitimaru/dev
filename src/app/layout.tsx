import Providers from "@/components/providers";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sasakitiDev",
  description: "tech blog by sasakiti",
};

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
