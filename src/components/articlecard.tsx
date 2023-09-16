import React from "react";
import Tag from "./tag";
import Link from "next/link";
import { Article } from "@/types/type";
import { dateFormatter } from "@/lib/formatter";
const ArticleCard = ({ article }: { article: Article }) => {
  const formattedDate = dateFormatter(article.date);
  return (
    <Link
      href={`/posts/${article.slug}`}
      key={article.id}
      className="flex flex-row items-center cursor-pointer"
    >
      <div className="flex flex-shrink-0 justify-center items-center bg-white dark:bg-slate-600 rounded-lg w-20 h-20">
        <p className="text-3xl sm:text-4xl">{article.icon}</p>
      </div>
      <div className="flex flex-col ml-4">
        <h2 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2 w-full">
          {article.title}
        </h2>
        <p className="text-gray-400 text-sm">
          {formattedDate}
        </p>
        <div className="inline-flex max-w-full overflow-hidden">
          {article.categories.slice(0, 2).map((tag, index) => (
            <React.Fragment key={index}>
              <Tag label={tag} />
            </React.Fragment>
          ))}
          {article.categories.length > 2 && <p className="self-end">...</p>}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
