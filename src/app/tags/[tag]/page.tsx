import React from "react";
import { allPosts } from "contentlayer/generated";
import ArticleCard from "@/components/articlecard";
import { getAllPosts } from "@/api/mdx/mdxAPI";

interface PostProps {
  params: {
    tag: string;
  };
}

async function getPostsFromParams(params: PostProps["params"]) {
  const tag = params?.tag;
  const articles = await getAllPosts();
  const lowerCaseTag = decodeURIComponent(tag).toLowerCase();
  return articles.filter((post) => {
    return post.tags.some(
      (cat) => cat.toLowerCase() === lowerCaseTag
    );
  });
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  const allTags = allPosts.flatMap((post) => post.tags);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.map((uniqueTag) => ({
    tag: uniqueTag,
  }));
}

export default async function TagPage({
  params,
}: {
  params: PostProps["params"];
}) {
  const articles = await getPostsFromParams(params);
  return (
    <main className="flex flex-col mt-20 mb-4 px-8 sm:px-20 lg:px-40 sm:mx-auto w-full">
      <div className="flex items-center mb-4 w-full">
        <h1 className="text-2xl sm:text-4xl text-left font-bold">
          Tags：
        </h1>
        <h2 className="text-md sm:text-2xl items-center text-left w-full">
          {decodeURIComponent(params.tag)}
        </h2>
      </div>
      <hr className="w-full mb-8" />
      <div className="grid gap-y-8 sm:gap-16 grid-cols-1 sm:grid-cols-2 border-b border-gray-200 dark:border-gray-600 pb-4">
        {articles.map((article, idx) => (
          <div key={idx}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </main>
  );
}
