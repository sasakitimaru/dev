'use client';
import React from "react";
import { useRouter } from "next/navigation";

const SearchField = () => {
  const router = useRouter();
  return (
    <div className="w-full max-w-xl border border-gray-300 rounded-full bg-white dark:bg-zinc-700">
      <input
        type="text"
        className="w-full h-10 px-4 p-4 rounded-full outline-blue-400 bg-inherit"
        placeholder="Search"
        autoFocus
        onChange={(e) => {
          router.push(`/search?q=${e.target.value}`);
        }}
      />
    </div>
  );
};

export default SearchField;
