import Tag from "@/components/tag";
import { allPosts } from "contentlayer/generated";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const tags = allPosts.flatMap((post) => post.tags);
  const uniqueTags = [...new Set(tags)];
  return (
    <div className="flex flex-col w-full min-h-screen px-4">
      <div className="flex flex-wrap gap-y-1 justify-center items-center max-w-2xl mb-4 sm:mx-auto sm:mt-8">
        {uniqueTags.map((uniqueTag, index) => (
          <React.Fragment key={index}>
            <Tag label={uniqueTag} />
          </React.Fragment>
        ))}
      </div>
      {children}
    </div>
  );
};

export default layout;
