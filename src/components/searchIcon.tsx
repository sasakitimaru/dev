import React from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  return (
    <Link href="/search" className="hover:opacity-75 cursor-pointer flex justify-center items-center mr-4">
        <SearchIcon className="text-md" />
        <p className="text-sm">search</p>
    </Link>
  );
};

export default Search;
