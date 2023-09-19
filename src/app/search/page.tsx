"use client";
import React, { useState, useEffect, Suspense, use } from "react";
import ArticleCard from "@/components/articlecard";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { allPosts } from "contentlayer/generated";
import { Article } from "@/types/type";

const SearchPage = () => {
  const articles = allPosts.map((post) => {
    const article: Article = {
      id: post._id,
      title: post.title,
      slug: post.slug,
      icon: post.icon,
      description: post.description,
      date: post.date,
      tags: post.tags,
      categories: post.categories,
    };
    return article;
  });
  const [searchResult, setSearchResult] = useState<Article[]>([]);
  const [loading , setLoading] = useState<boolean>(true);
  const [input, setInput] = useState<string>("");
  useEffect(() => {
    const result = articles.filter((article) => {
      return article.title
        .toLowerCase()
        .includes(input.toLowerCase());
    });
    setSearchResult(result);
    setLoading(false);
  }, [input]);

  return (
    <main className="flex flex-col bg-white dark:bg-gray-900 min-h-screen w-full py-24 justify-cente items-center px-8 sm:px-20 lg:px-40 mx-auto">
      <div className="w-full max-w-xl border border-gray-300 rounded-full bg-white dark:bg-zinc-700">
        <input
          type="text"
          className="w-full h-10 px-4 p-4 rounded-full outline-blue-400 bg-inherit"
          placeholder="Search"
          autoFocus
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <div className="grid gap-y-8 sm:gap-12 grid-cols-1 sm:grid-cols-2"></div>
      {!loading && searchResult.length === 0 ? (
        <div className="flex flex-row items-center">
          <SentimentVeryDissatisfiedIcon className="text-2xl mr-2" />
          <h1 className="text-md sm:text-2xl my-4 text-center w-full">
            {"Not Found, Please try Again another keyword."}
          </h1>
        </div>
      ) : (
        <div className="grid gap-y-8 sm:gap-16 grid-cols-1 sm:grid-cols-2 mt-8 w-full">
          {searchResult?.map((article, index) => (
            <React.Fragment key={index}>
              <ArticleCard article={article} />
            </React.Fragment>
          ))}
        </div>
      )}
    </main>
  );
};

export default SearchPage;
