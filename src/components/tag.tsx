"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  const router = useRouter();
  const handleRouting = () => {
    router.push(`/tags/${label}`);
  };
  return (
    <div onClick={handleRouting}>
      <div className="border border-gray-300 rounded-full h-6 inline-flex items-center mr-2 px-2 cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-700">
        {/* <img src={iconLink} className="w-4 h-4 mr-2" /> */}
        <span className="text-xs whitespace-nowrap">{label}</span>
      </div>
    </div>
  );
};

export default Tag;
