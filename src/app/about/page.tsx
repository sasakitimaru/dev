import React from "react";
import { Mdx } from "@/components/mdx-components";
import { allAbouts } from "contentlayer/generated";
import Terminal from "@/components/terminal";

const page = () => {
  const about = allAbouts[0];
  return (
    <div className="self-center relative p-4 lg:px-10 prose bg-white dark:bg-gray-800 sm:rounded-lg dark:prose-invert mb-10 mx-auto lg:mx-0 w-full h-full">
      <Mdx code={about.body.code} />
      <Terminal />
    </div>
  );
};

export default page;
