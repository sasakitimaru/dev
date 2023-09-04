import React from "react";
import Link from "next/link";
import _SearchIcon from "@mui/icons-material/Search";
const SearchIcon = () => {
  return (
    <Link href="/search">
      <div className="relative cursor-pointer rounded-md hover:opacity-75 h-10 w-10">
        <div className="p-2 h-full absolute cursor-pointer flex items-center justify-center">
          <_SearchIcon />
        </div>
      </div>
    </Link>
  );
};

export default SearchIcon;
