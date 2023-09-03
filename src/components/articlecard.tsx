import React from "react";
import Tag from "./tag";
const ArticleCard = ({ icon }: { icon: string }) => {
  return (
    <article className="flex flex-row items-center w-96 cursor-pointer">
      <div className="flex justify-center items-center bg-white dark:bg-slate-600 rounded-lg w-20 h-20">
        <p className="text-4xl">{icon}</p>
      </div>
      <div className="flex flex-col ml-4">
        <h2 className="text-2xl font-bold mb-2">記事タイトル</h2>
        <div className="inline-flex">
          <Tag label={"React"} />
          <Tag label={"Next"} />
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
