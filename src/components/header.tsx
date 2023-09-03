"use client";
import Link from "next/link";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  return (
    <nav className="lg:px-32 px-6 bg-white dark:bg-gray-800 shadow-md flex flex-wrap items-center md:py-2 fixed z-10 w-full top-0">
      <div className="flex-1 flex justify-between items-center">
        <Link href="/" className="m-3">
          <div className="font-bold">sasakitiBlog</div>
        </Link>
      </div>
      <nav>
        <ul className="text-xl text-center items-center lg:text-lg lg:flex  lg:pt-0">
          <li className="hidden md:block">
            <div className="relative rounded-md bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 hover:dark:bg-gray-500 ml-0 w-full">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </li>
          <li className="block md:hidden">
            <div className="relative cursor-pointer rounded-md hover:opacity-75 h-10 w-10">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </div>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Header;
