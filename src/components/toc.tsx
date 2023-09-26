"use client";
import { useEffect, useState } from "react";
import tocbot from "tocbot";

const Toc = () => {
  const [isClicked, setIsClicked] = useState(true);

  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".post",
      headingSelector: "h2, h3, h4",
    });
    return () => tocbot.destroy();
  }, []);

  return (
    <div className="border-none z-0 static lg:sticky mx-auto lg:mx-8 mb-4 top-20 p-4 sm:rounded-lg cursor-pointer select-none h-fit w-full sm:w-96 bg-white dark:bg-gray-800">
      <p
        className={`text-center text-md ml-4 font-bold relative
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
        className={`toc prose dark:prose-invert prose-a:no-underline
      ${isClicked ? "block" : "hidden"}
      `}
      />
    </div>
  );
};

export default Toc;
