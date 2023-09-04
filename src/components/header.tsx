import Link from "next/link";
import Image from "next/image";
import React from "react";
import SearchIcon from "./searchIcon";

const Header = () => {
  return (
    <nav className="lg:px-32 px-6 bg-white dark:bg-gray-800 shadow-md flex flex-wrap items-center md:py-2 fixed z-10 w-full top-0">
      <div className="flex-1 flex justify-between items-center">
        <Link href="/" className="m-3">
          <div className="font-bold">sasakitiBlog</div>
        </Link>
      </div>
      <nav>
        <ul className="text-xl text-center items-center lg:text-lg flex lg:pt-0">
          <li>
            <SearchIcon />
          </li>
          <li className="hidden sm:block">
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
      </nav>
    </nav>
  );
};

export default Header;
