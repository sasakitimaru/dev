import React, { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Mdx } from "@/components/mdx-components";
import Tag from "@/components/tag";
import { getArticles } from "@/api/postgres/postgresAPI";
import { FavoriteIconAnim } from "@/components/likesButton";
import Twittershare from "@/components/twittershare";
import CommentField from "@/components/comment";
import Toc from "@/components/toc";
import ArticleCardList from "@/components/articlecardlist";
import { getAllPosts } from "@/api/mdx/mdxAPI";

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
  const post = allPosts.find((post) => post.slug === slug);
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
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slug.split("/"),
  }));
}

const PostPage: React.FC<PostProps> = async ({ params }) => {
  const post = await getPostFromParams(params);
  const articles = await getAllPosts();

  // TODO: 記事のIDをタイトルから取得して、次の記事と前の記事を取得する
  //       現状記事のIDはパスになっているので以下ではうまくいかない
  // const nextArticle = articles.find((article) => Number(article.id) === Number(post!._id) + 1);
  // const prevArticle = articles.find((article) => Number(article.id) === Number(post!._id) - 1);

  if (!post) {
    notFound();
  }
  const articleData = await getArticlesData(post.title);
  return (
    <div className="flex flex-shrink flex-col relative lg:flex-row items-center lg:items-start">
      <Toc />
      <div className="w-full">
        <article className="post relative p-4 lg:px-10 prose bg-white dark:bg-gray-800 sm:rounded-lg dark:prose-invert mb-10 mx-auto lg:mx-0 w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <header>
              <h1 className="mb-2 text-2xl">{post.title}</h1>
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
                  {post.tags.map((tag, index) => (
                    <React.Fragment key={index}>
                      <Tag label={tag} />
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </header>
            <hr className="my-6 custom-border" />
            <Mdx code={post.body.code} />
            <hr className="custom-border" />
            <div className="flex flex-row items-center justify-between mx-auto w-10/12">
              <FavoriteIconAnim article={articleData} />
              <Twittershare title={post.title} />
            </div>
          </Suspense>
        </article>
        {/* TODO: 次と前の記事を載せる */}
        {/* <ArticleCardList articles={
          [prevArticle, nextArticle].filter((article) => article !== undefined) as any
        }/>*/}
        {articleData && <CommentField articleId={articleData.id} />}
      </div>
    </div>
  );
};

export default PostPage;
