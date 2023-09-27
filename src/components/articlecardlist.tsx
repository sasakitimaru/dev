import React from "react";
import Tag from "./tag";
import Link from "next/link";
import { Article } from "@/types/type";
import { dateFormatter } from "@/lib/formatter";
const ArticleCardList = ({ articles }: { articles: Article[] }) => {

  const isLatest = (date: string) => {
    const now = new Date();
    const articleDate = new Date(date);
    const diff = now.getTime() - articleDate.getTime();
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays < 5;
  }
  return (
    <div className="grid gap-y-8 sm:gap-16 grid-cols-1 justify-center items-center sm:grid-cols-2 mt-8 lg:mx-48">
      {articles?.map((article, index) => (
        <Link
          href={`/posts/${article.slug}`}
          key={index}
          className="flex flex-row items-center cursor-pointer"
        >
          <div className="flex flex-shrink-0 justify-center items-center bg-white dark:bg-slate-600 rounded-lg w-20 h-20 indicator">
          {isLatest(article.date) && <span className="indicator-item badge border-none text-white font-bold bg-blue-600 mr-2">new</span>}
            <p className="text-3xl sm:text-4xl">{article.icon}</p>
          </div>
          <div className="flex flex-col ml-4">
            <h2 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2 w-full">
              {article.title}
            </h2>
            <p className="text-gray-400 text-sm">{dateFormatter(article.date)}</p>
            <div className="inline-flex max-w-full overflow-hidden">
              {article.tags.slice(0, 2).map((tag, index) => (
                <React.Fragment key={index}>
                  <Tag label={tag} />
                </React.Fragment>
              ))}
              {article.tags.length > 2 && <p className="self-end">...</p>}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleCardList;
