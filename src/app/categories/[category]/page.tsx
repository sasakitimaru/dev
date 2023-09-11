import React from "react";
import { allPosts } from "contentlayer/generated";
import ArticleCard from "@/components/articlecard";
import { getAllPosts } from "@/api/mdx/mdxAPI";

interface PostProps {
  params: {
    category: string;
  };
}

async function getPostsFromParams(params: PostProps["params"]) {
  const category = params?.category;
  const articles = await getAllPosts();
  const lowerCaseCategory = decodeURIComponent(category).toLowerCase();
  return articles.filter((post) => {
    return post.categories.some(
      (cat) => cat.toLowerCase() === lowerCaseCategory
    );
  });
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  const allCategories = allPosts.flatMap((post) => post.categories);
  const uniqueCategories = [...new Set(allCategories)];
  return uniqueCategories.map((category) => ({
    category: category,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: PostProps["params"];
}) {
  const articles = await getPostsFromParams(params);
  return (
    <main className="flexs flex-col justify-center mt-20 items-center mb-4 px-8 sm:px-20 lg:px-40 sm:mx-auto">
      <h1 className="text-2xl sm:text-4xl text-left mb-4 font-bold w-full">
        Categories
      </h1>
      {/* TODO: add a category being chosen */}
      <hr className="w-full mb-8" />
      <div className="grid gap-y-8 sm:gap-16 grid-cols-1 sm:grid-cols-2 border-b border-gray-200 dark:border-gray-600 pb-4">
        {articles.map((article, idx) => (
          <React.Fragment key={idx}>
          <ArticleCard article={article} />
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
