import React, { Suspense } from "react";
import { Metadata } from "next";
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
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

const PostPage: React.FC<PostProps> = async ({ params }) => {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }
  return (
    <article className="p-6 lg:px-10 prose prose-sm bg-white dark:bg-gray-800 rounded-lg lg:prose-base dark:prose-invert mx-auto mb-10">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </article>
  );
};

export default PostPage;
