import React from "react";
import ThemeSwitch from "./themeSwitch";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import LinkedinIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-blue-950">
      <footer className="footer p-6 sm:p-10 max-w-6xl">
        <div className="flex flex-col justify-center items-center mx-auto">
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <Link
                href={"https://github.com/sasakitimaru"}
                target={"blank"}
                className="flex flex-row justify-center items-center hover:opacity-50 cursor-pointer"
              >
                <GitHubIcon fontSize={"medium"} />
              </Link>
              <Link
                href={"https://twitter.com/sasakiti_maru"}
                target={"blank"}
                className="flex flex-row justify-center items-center hover:opacity-50 cursor-pointer"
              >
                <TwitterIcon fontSize={"medium"} />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/tomoya-ohki-35aa79213/"}
                target={"blank"}
                className="flex flex-row justify-center items-center hover:opacity-50 cursor-pointer"
              >
                <LinkedinIcon fontSize={"medium"} />
              </Link>
            </div>
          </nav>
          <p> &copy; 2023 sasakitimaru All rights reserved.</p>
        </div>
        <nav>
          <header className="footer-title">Categories</header>
        </nav>
        <nav>
          <header className="footer-title">Tags</header>
          <Link href="/tags/Java">Java</Link>
          <Link href="/tags/TypeScript">TypeScript</Link>
          <Link href="/tags">others</Link>
        </nav>
        <nav>
          <header className="footer-title">Contact</header>
          <Link href="/about">About</Link>
          <a className="link link-hover">Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
