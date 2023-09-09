import React from "react";
import ArticleCard from "@/components/articlecard";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SearchField from "@/components/search";
import { getAllPosts } from "@/api/mdxAPI";

interface SearchProps {
  searchParams: {
    q: string;
  };
}

async function getPostsFromParams(searchParams: SearchProps["searchParams"]) {
  const articles = await getAllPosts();
  return articles
    .filter((article) => {
      return article.title.toLowerCase().includes(searchParams?.q?.toLowerCase());
    })
}

const SearchPage: React.FC<SearchProps> = async ({ searchParams }) => {
  const articles = searchParams.q
    ? await getPostsFromParams(searchParams)
    : await getAllPosts();
  return (
    <main className="flex flex-col bg-white dark:bg-gray-900 min-h-screen py-24 justify-cente items-center px-8 sm:px-20 lg:px-40 mx-auto">
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
          {articles.map((article, index) => (
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
