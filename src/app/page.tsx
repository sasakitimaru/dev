import React from "react";
import ArticleCardList from "@/components/articlecardlist";
import { getAllPosts } from "@/api/mdx/mdxAPI";

export default async function Home() {
  // await getCsrfToken();
  const articles = await getAllPosts();
  return (
    <div className="px-4">
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="text-2xl sm:text-4xl mb-4 font-bold w-full lg:w-9/12">
          Tech Articles
        </h1>
        <hr className="w-full lg:w-9/12 mb-4" />
      </div>
      <ArticleCardList articles={articles} />
    </div>
  );
}
