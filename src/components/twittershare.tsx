"use client";
import React from "react";
import { TwitterShareButton } from "react-share";
import TwitterIcon from "@mui/icons-material/Twitter";
import { usePathname } from "next/navigation";

interface TwitterIconProps {
  title: string;
}

const Twittershare: React.FC<TwitterIconProps> = ({ title }) => {
  const currentPath = usePathname();
  const url = process.env.NEXT_PUBLIC_BASE_URL + currentPath;
  return (
    <TwitterShareButton title={title} url={url}>
      <div className="flex items-center border border-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-xl">
        <TwitterIcon fontSize="medium" className="ml-2"/>
        <p className="mr-2 my-1 md:mt-1 md:mb-1">share</p>
      </div>
    </TwitterShareButton>
  );
};

export default Twittershare;