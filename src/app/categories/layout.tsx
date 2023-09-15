import Tag from "@/components/tag";
import { allPosts } from "contentlayer/generated";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const categories = allPosts.flatMap((post) => post.categories);
  const uniqueCategories = [...new Set(categories)];
  return (
    <div className="flex flex-col w-full min-h-screen border-t bg-white dark:bg-slate-900">
      {children}
      <div className="flex flex-wrap gap-y-1 justify-center items-center max-w-2xl mx-8 mb-4 sm:mx-auto">
        {uniqueCategories.map((uniqueCategory, index) => (
          <React.Fragment key={index}>
            <Tag label={uniqueCategory} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default layout;
