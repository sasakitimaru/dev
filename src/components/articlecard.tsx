import React from "react";
import Tag from "./tag";
import Link from "next/link";
import { Article } from "@/types/type";
const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link href={`${article.slug}`} key={article.id} className="flex flex-row items-center cursor-pointer">
        <div className="flex flex-shrink-0 justify-center items-center bg-white dark:bg-slate-600 rounded-lg w-20 h-20">
          <p className="text-3xl sm:text-4xl">{article.icon}</p>
        </div>
        <div className="flex flex-col ml-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 line-clamp-2">
            {article.title}
          </h2>
          <div className="inline-flex max-w-full overflow-hidden">
            {article.categories.slice(0, 2).map((tag, index) => (
              <Tag label={tag} idx={index} />
            ))}
          </div>
        </div>
    </Link>
  );
};

export default ArticleCard;
