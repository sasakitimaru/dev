"use client";
import React, { useState, useEffect } from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Article } from "@/types/type";
import ArticleCardList from "@/components/articlecardlist";
import { allPosts } from "contentlayer/generated";

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [input, setInput] = useState<string>("");

  const articles: Article[] = allPosts
    .map((post) => ({
      id: post._id,
      icon: post.icon,
      title: post.title,
      description: post.description,
      slug: post.slug,
      tags: post.tags,
      date: post.date,
      categories: post.categories,
    }))
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  useEffect(() => {
    const result = articles.filter((article) => {
      return article.title.toLowerCase().includes(input.toLowerCase());
    });
    setSearchResult(result);
  }, [input]);

  // setSearchResultの処理が終わったことをトリガーとしてloadingをfalseにする
  useEffect(() => {
    if (searchResult.length !== 0) {
      setLoading(false);
    }
  }, [searchResult]);
  
  return (
    <div className="flex flex-col px-4">
      <input
        type="text"
        className="w-full max-w-xl h-10 px-4 p-4 self-center border border-gray-300 rounded-full bg-white dark:bg-zinc-700 outline-blue-400 bg-inherit"
        placeholder="Search"
        autoFocus
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
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
    </div>
  );
};

export default SearchPage;
