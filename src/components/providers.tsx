"use client";
import { ThemeProvider } from "next-themes";
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      themes={["light", "dark", "system"]}
    >
      {children}
    </ThemeProvider>
  );
};
export default Providers;
