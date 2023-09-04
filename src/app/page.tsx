import ArticleCard from "@/components/articlecard";
import { Article } from "@/types/type";
import { allPosts } from "contentlayer/generated";

export default function Home() {
  const articles = allPosts.map((post) => {
    const article:Article = {
      id: post._id,
      title: post.title,
      slug: post.slug,
      icon: post.icon,
      description: post.description,
      date: post.date,
      categories: post.categories,
    }
    return article;
  });
  return (
    <main className="flex flex-col justify-center items-center mb-10 px-8 sm:px-20 lg:px-40 mx-auto">
      <h1 className="text-2xl sm:text-4xl text-left mb-4 font-bold w-full">
        Tech Articles
      </h1>
      <hr className="w-full mb-8" />
      <div className="grid gap-y-8 sm:gap-16 grid-cols-1 sm:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </main>
  );
}
