import React from "react";
import ThemeSwitch from "./themeSwitch";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full border-t bg-white dark:bg-slate-900">
      <div className="flex flex-row justify-center items-center my-4">
        <Link href={"https://github.com/sasakitimaru"} target={"blank"} className="flex flex-row justify-center items-center hover:opacity-50 mr-4 cursor-pointer">
          <GitHubIcon fontSize={"large"} />
        </Link>
        <Link href={"https://twitter.com/sasakiti_maru"} target={"blank"} className="flex flex-row justify-center items-center hover:opacity-50 cursor-pointer">
          <TwitterIcon fontSize={"large"} />
        </Link>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        &copy; 2023 sasakitimaru All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
