import Tag from "@/components/tag";
import { allPosts } from "contentlayer/generated";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const categories = allPosts.flatMap((post) => post.categories);
  return (
    <div className="flex flex-col w-full min-h-screen border-t bg-white dark:bg-slate-900">
      {children}
      <div className="flex flex-wrap gap-y-1 justify-center items-center max-w-2xl mx-8 sm:mx-auto">
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <Tag label={category} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default layout;
