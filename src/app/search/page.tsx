import React from "react";
import ArticleCard from "@/components/articlecard";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SearchField from "@/components/search";

const SearchPage = ({searchParams}: {searchParams: {q: string}}) => {
  return (
    <main className="flex flex-col justify-cente items-center mb-10 px-8 sm:px-20 lg:px-40 mx-auto">
      <SearchField />
      <div className="grid gap-y-8 sm:gap-12 grid-cols-1 sm:grid-cols-2">
      </div>
      <div className="flex flex-row items-center">
        <SentimentVeryDissatisfiedIcon className="text-2xl mr-2" />
        <h1 className="text-md sm:text-2xl my-4 text-center w-full">
          {"Not Found, Please try Again another keyword."}
        </h1>
      </div>
    </main>
  );
};

export default SearchPage;
