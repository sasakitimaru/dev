import React from "react";
import Tag from "./tag";
import Link from "next/link";
const ArticleCard = ({ icon }: { icon: string }) => {
  return (
    <Link href="/posts/testarticle">
    <article className="flex flex-row items-center sm:w-96 cursor-pointer">
      <div className="flex justify-center items-center bg-white dark:bg-slate-600 rounded-lg w-20 h-20">
        <p className="text-4xl">{icon}</p>
      </div>
      <div className="flex flex-col ml-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 w-32 sm:w-44 whitespace-pre-wrap truncate">記事タイトルaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h2>
        <div className="inline-flex">
          <Tag label={"React"} />
          <Tag label={"Next"} />
        </div>
      </div>
    </article>
    </Link>
  );
};

export default ArticleCard;
