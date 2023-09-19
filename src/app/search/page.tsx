"use client";
import React, { useState, useEffect, Suspense, use } from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { allPosts } from "contentlayer/generated";
import { Article } from "@/types/type";
import ArticleCardList from "@/components/articlecardlist";

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
  const [loading, setLoading] = useState<boolean>(true);
  const [input, setInput] = useState<string>("");
  useEffect(() => {
    const result = articles.filter((article) => {
      return article.title.toLowerCase().includes(input.toLowerCase());
    });
    setSearchResult(result);
    setLoading(false);
  }, [input]);

  return (
    <main className="flex flex-col bg-white dark:bg-gray-900 py-24 px-8 sm:px-20 lg:px-40">
      <div className="w-full self-center max-w-xl border border-gray-300 rounded-full bg-white dark:bg-zinc-700">
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
      {!loading && searchResult.length === 0 ? (
        <div className="flex flex-row self-center items-center">
          <SentimentVeryDissatisfiedIcon className="text-2xl mr-2" />
          <h1 className="text-md sm:text-2xl my-4 text-center w-full">
            {"Not Found, Please try Again another keyword."}
          </h1>
        </div>
      ) : (
        <ArticleCardList articles={searchResult} />
      )}
    </main>
  );
};

export default SearchPage;
