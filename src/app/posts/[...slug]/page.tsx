import React, { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Mdx } from "@/components/mdx-components";
import Tag from "@/components/tag";
import { getArticles } from "@/api/postgresAPI";
import { FavoriteIconAnim } from "@/components/likesButton";
import Twittershare from "@/components/twittershare";
import CommentField from "@/components/comment";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getArticlesData(title: string) {
  const res = await getArticles();
  const articlesData = res.data;
  return articlesData.find((article) => article.title === title);
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const decodedString = decodeURIComponent(slug);
  const post = allPosts.find((post) => post.slugAsParams === decodedString);
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
  const articleData = await getArticlesData(post.title);
  return (
    <div className="sm:flex sm:flex-col sm:items-center">
      <article className="relative mt-20 p-6 lg:px-10 prose bg-white dark:bg-gray-800 rounded-lg prose-base dark:prose-invert mb-10">
        <Suspense fallback={<div>Loading...</div>}>
          <header>
            <h1 className="mb-2">{post.title}</h1>
            {post.description && (
              <p className="text-xl mt-0 mb-6 text-gray-700 dark:text-gray-200">
                {post.description}
              </p>
            )}
            <div className="space-x-1 text-xs text-gray-500">
              <span>{format(parseISO(post.date), "MMMM dd, yyyy")}</span>
              <span>{` • `}</span>
              <span>{post.readingTime.text}</span>
              <span>{` • `}</span>
              <span className="flex mt-2">
                {post.categories.map((tag, index) => (
                  <React.Fragment key={index}>
                    <Tag label={tag} />
                  </React.Fragment>
                ))}
              </span>
            </div>
          </header>
          <hr className="my-6" />
          <Mdx code={post.body.code} />
          <hr />
          <div className="flex flex-row items-center justify-between mx-auto w-10/12">
            <FavoriteIconAnim article={articleData} />
            <Twittershare title={post.title} />
          </div>
        </Suspense>
      </article>
      {articleData && <CommentField articleId={articleData.id} />}
    </div>
  );
};

export default PostPage;
