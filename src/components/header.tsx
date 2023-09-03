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
    <nav className="lg:px-32 px-6 bg-white dark:bg-gray-800 shadow-md flex flex-wrap items-center lg:py-0 py-2 fixed z-10 w-full top-0">
      <div className="flex-1 flex justify-between items-center">
        <Link href="/" className="m-3">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 377.4 88.3"
            aria-label="Zenn | エンジニアのための情報共有コミュニティ"
            height="22"
          >
            <title>Home</title>
            <g fill="#111">
              <path d="M233,56.8h-39c0.5,3.5,2.2,6.8,4.8,9.2c2.7,2.3,6.2,3.5,9.8,3.4c2.8,0,5.6-0.5,8.2-1.7c2.5-1.1,4.8-2.8,6.5-5l8.2,9.5 c-2.5,3.4-5.7,6.1-9.5,7.9c-4.6,2.2-9.6,3.3-14.7,3.2c-5.7,0.1-11.4-1.2-16.5-4c-4.5-2.5-8.2-6.3-10.7-10.9s-3.8-9.8-3.7-15.1v-2.2 c-0.1-5.7,1.1-11.3,3.5-16.5c2.2-4.7,5.7-8.6,10.1-11.3c4.7-2.8,10.1-4.2,15.5-4.1c5.2-0.1,10.3,1.1,14.9,3.7 c4.1,2.5,7.4,6.2,9.4,10.5c2.2,5.1,3.3,10.5,3.2,16.1V56.8z M216.1,43.9c0.1-2.9-0.9-5.7-2.8-7.9c-1.8-1.9-4.4-2.9-7.9-2.9 c-2.9-0.1-5.8,1.1-7.7,3.2c-2,2.6-3.3,5.7-3.6,9h22V43.9z"></path>
              <path d="M128.3,67.9h36.1v14.7h-56.9V72l35.8-54.3h-36.2V2.9h56.6v10.4L128.3,67.9z"></path>
              <path d="M248.8,50.7c0-19.1,12.7-29.2,28.2-29.2s27.9,10.1,27.9,29.2V82h-16V51.4c0-10.6-4.8-16.1-12-16.1s-12.4,5.5-12.4,16.1 v30.7h-15.8L248.8,50.7L248.8,50.7z"></path>
              <path d="M320.3,50.7c0-19.1,12.7-29.2,28.2-29.2s27.9,10.1,27.9,29.2V82h-16V51.4c0-10.6-4.8-16.1-12-16.1S336,40.8,336,51.4v30.7 h-15.8L320.3,50.7L320.3,50.7z"></path>
            </g>
            <path
              fill="#3EA8FF"
              className="st0"
              d="M2.4,83.3h17c0.9,0,1.7-0.5,2.2-1.2L68.4,5.2C69,4.2,68.3,3,67.1,3H51c-0.8,0-1.5,0.4-1.9,1.1L1.6,81.9 C1.3,82.5,1.7,83.3,2.4,83.3z"
            ></path>
            <path
              fill="#3EA8FF"
              className="st0"
              d="M61,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5H65.7c-0.6,0-1.2,0.3-1.5,0.8L41.5,81.2c-0.6,0.9,0.1,2.1,1.2,2.1 h16.3C59.8,83.3,60.6,82.9,61,82.1z"
            ></path>
          </svg>
        </Link>
      </div>
      <label className="cursor-pointer lg:hidden block">
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
            <li className="py-2 lg:py-0 my-2">
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
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Header;
