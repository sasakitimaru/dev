import { allPosts } from "contentlayer/generated";
import ArticleCard from "@/components/articlecard";
import { Article } from "@/types/type";

interface PostProps {
  params: {
    category: string;
  };
}

async function getPostsFromParams(params: PostProps["params"]) {
  const category = params?.category;
  const lowerCaseCategory = category.toLowerCase();
  const posts = allPosts.filter((post) => {
    return post.categories.some(
      (cat) => cat.toLowerCase() === lowerCaseCategory
    );
  });
  return posts;
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  const allCategories = allPosts.flatMap((post) => post.categories);
  const uniqueCategories = [...new Set(allCategories)];
  return uniqueCategories.map((category) => ({
    category: category,
  }));
}

export default async function Home({
  params,
}: {
  params: PostProps["params"];
}) {
  const articles = await getPostsFromParams(params);
  const formatted_articles = articles.map((post) => {
    const article: Article = {
      id: post._id,
      title: post.title,
      slug: post.slug,
      icon: post.icon,
      description: post.description,
      date: post.date,
      categories: post.categories,
    };
    return article;
  });
  return (
    <main className="flex flex-col justify-center mt-20 items-center mb-10 px-8 sm:px-20 lg:px-40 mx-auto">
      <h1 className="text-2xl sm:text-4xl text-left mb-4 font-bold w-full">
        Tech Articles
      </h1>
      <hr className="w-full mb-8" />
      <div className="grid gap-y-8 sm:gap-16 grid-cols-1 sm:grid-cols-2">
        {formatted_articles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </main>
  );
}