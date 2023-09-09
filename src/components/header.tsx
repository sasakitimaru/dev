"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Search from "./searchIcon";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SearchIcon from "@mui/icons-material/Search";
import GitHub from "@mui/icons-material/GitHub";
import Hamburger from "hamburger-react";
import HomeIcon from "@mui/icons-material/Home";

const HeadeInfoListLargerThanSm = () => {
  return (
    <ul className="text-xl text-center items-center lg:text-lg flex lg:pt-0">
      <li>
        <Search />
      </li>
      <li>
        <Link href="/categories">
          <LocalOfferIcon className="text-md text-center hover:opacity-50" />
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

const Header = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <>
      <nav className="md:px-24 lg:px-32 px-6 bg-white dark:bg-gray-800 shadow-md flex flex-wrap items-center md:py-2 fixed z-20 w-full top-0">
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
          <InfoLink href="/" setIsClicked={setIsClicked}>
            <HomeIcon />
            <span className="text-md">Home</span>
          </InfoLink>
          <InfoLink href="/search" setIsClicked={setIsClicked}>
            <SearchIcon />
            <span className="text-md">Search Articles</span>
          </InfoLink>
          <InfoLink href="/categories" setIsClicked={setIsClicked}>
            <LocalOfferIcon />
            <span className="text-md">Categories</span>
          </InfoLink>
          <InfoLink
            href="https://github.com/sasakitimaru"
            setIsClicked={setIsClicked}
            target="blank"
          >
            <GitHub />
            <span className="text-md">Github</span>
          </InfoLink>
        </aside>
      </nav>
      <div
        className={`fixed top-0 w-screen h-screen bg-black opacity-50 z-10 ${
          isClicked ? "block" : "hidden"
        }`}
        onClick={() => setIsClicked(false)}
      ></div>
    </>
  );
};

export default Header;
