import Link from "next/link";
import React from "react";

interface TagProps {
  label: string;
  key: number;
}

const Tag: React.FC<TagProps> = ({ label, key }) => {
  return (
    <div key={key} className="border border-gray-300 rounded-full h-6 inline-flex items-center mr-1 px-2 cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-700">
      {/* <img src={iconLink} className="w-4 h-4 mr-2" /> */}
      <p className="text-xs whitespace-nowrap">{label}</p>
    </div>
  );
};

export default Tag;
