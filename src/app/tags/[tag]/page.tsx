import React from "react";
import { allPosts } from "contentlayer/generated";
import ArticleCardList from "@/components/articlecardlist";
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
    return post.tags.some((cat) => cat.toLowerCase() === lowerCaseTag);
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
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4 w-full lg:w-9/12">
        <h1 className="text-2xl sm:text-4xl text-left font-bold">Tags：</h1>
        <h2 className="text-md sm:text-2xl items-center text-left w-full">
          {decodeURIComponent(params.tag)}
        </h2>
      </div>
      <hr className="mb-2 sm:mb-4 w-full lg:w-9/12" />
      <ArticleCardList articles={articles} />
    </div>
  );
}
