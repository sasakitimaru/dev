import React from "react";
import Post from "../../../contents/testarticle.mdx";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Mdx } from "@/components/mdx-components";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  allPosts.map((post) => (
    console.log(post.slugAsParams.split("/"))
  ))
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

const PostPage: React.FC<PostProps> = async ({ params }) => {
  console.log("params",params)
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }
  return (
    <article className="py-6 prose lg:prose-xl dark:prose-invert mx-auto">
      <header>
        <h1 className="mb-2">{post.title}</h1>
        {post.description && (
          <p className="text-xl mt-0 mb-6 text-gray-700 dark:text-gray-200">
            {post.description}
          </p>
        )}
        <p className="space-x-1 text-xs text-gray-500">
          <span>{format(parseISO(post.date), "MMMM dd, yyyy")}</span>
          <span>{` • `}</span>
          <span>{post.readingTime.text}</span>
          <span>{` • `}</span>
          <span>
            <Link
              href={`/categories/${encodeURIComponent(
                post.category.toLowerCase()
              )}`}
            >
              {post.category}
            </Link>
          </span>
        </p>
      </header>
      <hr className="my-6" />
      <Mdx code={post.body.code} />
    </article>
  );
};

export default PostPage;
