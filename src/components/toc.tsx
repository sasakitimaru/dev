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
    <div className="lg:sticky flex-shrink-1 mx-auto sm:mx-4 top-20 p-4 m-4 rounded-lg cursor-pointer select-none w-80 sm:w-96 h-fit bg-white dark:bg-gray-800">
      <p
        className={`text-center text-2xl ml-4 font-bold relative
      before:absolute
      before:left-3
      before:content-['▶']
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
