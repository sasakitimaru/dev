import React from "react";
import ArticleCardList from "@/components/articlecardlist";
import { getAllPosts } from "@/api/mdx/mdxAPI";

export default async function Home() {
  // await getCsrfToken();
  const articles = await getAllPosts();
  return (
    <main className="flex flex-col justify-center mt-20 items-center mb-10 px-8 sm:px-20 lg:px-40 mx-auto">
      <h1 className="text-2xl sm:text-4xl text-left mb-4 font-bold w-full lg:w-9/12">
        Tech Articles
      </h1>
      <hr className="w-full lg:w-9/12 mb-4" />
      <ArticleCardList articles={articles} />
    </main>
  );
}
