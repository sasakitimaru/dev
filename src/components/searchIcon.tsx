import React from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  return (
    <Link href="/search">
      <div className="relative cursor-pointer rounded-md hover:opacity-75 h-10 w-10">
        <div className="p-2 h-full absolute cursor-pointer flex items-center justify-center">
          <SearchIcon className="text-md"/>
        </div>
      </div>
    </Link>
  );
};

export default Search;
