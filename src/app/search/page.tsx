import React from "react";
import ArticleCard from "@/components/articlecard";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SearchField from "@/components/search";
import { allPosts } from "contentlayer/generated";

interface SearchProps {
  searchParams: {
    q: string;
  };
}

function getPostsFromParams(searchParams: SearchProps["searchParams"]) {
  return allPosts
    .filter((post) => {
      return post.title.toLowerCase().includes(searchParams?.q?.toLowerCase());
    })
    .map((post) => {
      const article = {
        id: post._id,
        title: post.title,
        slug: post.slug,
        icon: post.icon,
        description: post.description,
        date: post.date,
        categories: post.categories,
      };
      return article;
    });
}

const SearchPage: React.FC<SearchProps> = async ({ searchParams }) => {
  const articles = searchParams.q ? await getPostsFromParams(searchParams) : await allPosts.map((post) => {
    const article = {
      id: post._id,
      title: post.title,
      slug: post.slug,
      icon: post.icon,
      description: post.description,
      date: post.date,
      categories: post.categories,
    };
    return article;
  });
  return (
    <main className="flex flex-col bg-white dark:bg-gray-900 h-screen py-24 justify-cente items-center px-8 sm:px-20 lg:px-40 mx-auto">
      <SearchField />
      <div className="grid gap-y-8 sm:gap-12 grid-cols-1 sm:grid-cols-2"></div>
      {articles.length === 0 ? (
        <div className="flex flex-row items-center">
          <SentimentVeryDissatisfiedIcon className="text-2xl mr-2" />
          <h1 className="text-md sm:text-2xl my-4 text-center w-full">
            {"Not Found, Please try Again another keyword."}
          </h1>
        </div>
      ) : (
        <div className="grid gap-y-8 sm:gap-16 grid-cols-1 sm:grid-cols-2 mt-8">
          {articles.map((article) => (
            <ArticleCard article={article} />
          ))}
        </div>
      )}
    </main>
  );
};

export default SearchPage;
