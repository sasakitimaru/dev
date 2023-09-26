"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Search from "./searchIcon";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SearchIcon from "@mui/icons-material/Search";
import GitHub from "@mui/icons-material/GitHub";
import Hamburger from "hamburger-react";
import HomeIcon from "@mui/icons-material/Home";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const HeadeInfoListLargerThanSm = () => {
  return (
    <ul className="text-xl text-center items-center lg:text-lg flex lg:pt-0">
      <li>
        <Search />
      </li>
      <li>
        <Link
          href="/tags"
          className="hover:opacity-75 cursor-pointer flex justify-center items-center"
        >
          <LocalOfferIcon className="text-[20px] mr-1" />
          <p className="text-sm">Tags</p>
        </Link>
      </li>
      <li className="block">
        <Link href="https://github.com/sasakitimaru" target="blank">
          <Image
            src="/myLovelyCat.jpg"
            alt="cat"
            className="w-10 h-10 ml-4 overflow-hidden rounded-full"
            width={1000}
            height={1000}
          />
        </Link>
      </li>
    </ul>
  );
};

interface InfoLinkProps {
  children: React.ReactNode;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  href: string;
  target?: string;
}
const InfoLink: React.FC<InfoLinkProps> = ({
  children,
  setIsClicked,
  href,
  target,
}) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-x-1 w-10/12 pb-1 mb-4 border-b custom-border"
      onClick={() => setIsClicked(false)}
      target={target}
    >
      {children}
    </Link>
  );
};

function isScrollToBottom() {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  return scrollHeight - scrollTop === clientHeight;
}

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [scrollTopButtonVisible, setScrollTopButtonVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setHeaderVisible(scrollTop < lastScrollTop || scrollTop <= 0);
      setScrollTopButtonVisible(
        scrollTop < lastScrollTop || isScrollToBottom()
      );
      setLastScrollTop(scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setScrollTopButtonVisible(false);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [scrollTopButtonVisible]);
  return (
    <>
      <nav
        className={`md:px-24 lg:px-32 px-6 bg-white dark:bg-gray-800 shadow-md flex flex-wrap items-center md:py-2 fixed z-30 w-full top-0 duration-100
       ${headerVisible ? "translate-y-0" : "-translate-y-full"}
       sm:translate-y-0
      `}
        ref={headerRef}
      >
        <div className="flex-1 flex items-center">
          <Image
            src="/draw1.svg"
            alt="homeicon"
            className="w-10 h-10 overflow-hidden rounded-full"
            width={100}
            height={100}
          />
          <Link href="/" className="m-3">
            <div className="font-bold">sasakiti-dev</div>
          </Link>
        </div>
        <div className="hidden md:flex flex-wrap items-center text-base justify-center">
          <HeadeInfoListLargerThanSm />
        </div>
        <button
          className="md:hidden"
          aria-label="toggle menu"
          onClick={() => setIsClicked(!isClicked)}
        >
          <Hamburger toggled={isClicked} toggle={setIsClicked} size={24} />
        </button>
        <aside
          className={`flex flex-col items-center bg-inherit justify-cente shadow-sm absolute top-full right-0 h-screen w-8/12
      ${
        isClicked ? "translate-x-0" : "translate-x-full"
      } transition-all duration-500 ease-in-out`}
        >
          <p className="text-xl w-full mt-4 mb-4 pl-8">Menu</p>
          <hr className="w-10/12 mb-4 border-blue-500" />
          <InfoLink href="/" setIsClicked={setIsClicked}>
            <HomeIcon />
            <span className="text-md p-1">Home</span>
          </InfoLink>
          <InfoLink href="/search" setIsClicked={setIsClicked}>
            <SearchIcon />
            <span className="text-md p-1">Search</span>
          </InfoLink>
          <InfoLink href="/tags" setIsClicked={setIsClicked}>
            <LocalOfferIcon />
            <span className="text-md p-1">Tags</span>
          </InfoLink>
          <InfoLink
            href="https://github.com/sasakitimaru"
            setIsClicked={setIsClicked}
            target="blank"
          >
            <GitHub />
            <span className="text-md p-1">Github</span>
          </InfoLink>
        </aside>
      </nav>
      <div
        className={`fixed top-0 w-screen h-screen bg-black z-20 transition-all duration-300 ${
          isClicked ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsClicked(false)}
      />
      <Fab
        color="primary"
        // area-aria-label="scroll to top"
        className={`fixed bottom-10 left-10 z-30 bg-blue-500 transition-all duration-300 
        ${
          scrollTopButtonVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpwardIcon />
      </Fab>
    </>
  );
};

export default Header;
