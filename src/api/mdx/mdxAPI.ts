import { allPosts } from "contentlayer/generated";
import { Article } from "@/types/type";
import { getArticles, createArticles } from "../postgres/postgresAPI";

export async function getAllPosts () {
    const res = await getArticles();
    const prevArticleData = res.data;
    const articles = allPosts.map((post) => {
      const article: Article = {
        id: post._id,
        title: post.title,
        slug: post.slug,
        icon: post.icon,
        description: post.description,
        date: post.date,
        tags: post.tags,
        categories: post.categories,
      };
      return article;
    });
    allPosts.forEach((post) => {
      const isDuplicate = prevArticleData.some(
        (prevPost) => prevPost.title === post.title
      );
      if (!isDuplicate && post.title) {
        const article = {
          title: post.title,
          likes: 0,
        };
        createArticles(article);
      }
    });
    const sortedArticles = articles.sort((a, b) => b.date.localeCompare(a.date));
    return sortedArticles;
};