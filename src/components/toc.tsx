"use client";
import { useEffect, useState } from "react";
import tocbot from "tocbot";

const Toc = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(window.innerWidth > 640);
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".post",
      headingSelector: "h2, h3, h4",
    });
    return () => tocbot.destroy();
  }, []);

  return (
    <div className="fixed border-y border-gray-200 dark:border-gray-700 sm:border-none top-12 z-20 sm:z-0 sm:static lg:sticky sm:mx-auto lg:mx-8 sm:mb-4 sm:top-20 p-2 sm:p-4 sm:rounded-lg cursor-pointer select-none w-full sm:w-96 h-fit bg-white dark:bg-gray-800">
      <p
        className={`text-center text-md sm:text-2xl ml-4 font-bold relative
      before:absolute
      before:left-3
      before:content-['▶︎']
      before:duration-300
      ${isClicked ? "before:rotate-90" : "before:rotate-0"}
      `}
        onClick={() => setIsClicked(!isClicked)}
      >
        目次
      </p>
      <nav
        className={`toc prose prose-xl dark:prose-invert prose-a:no-underline duration-300
      ${isClicked ? "block" : "hidden"}
      `}
      />
    </div>
  );
};

export default Toc;
