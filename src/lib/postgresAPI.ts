import axios from "axios";
import { ArticlesRequest, ArticlesResponse } from "@/types/type";
import { CsrfToken } from "@/types/type";

export const getCsrfToken = async () => {
  const { data } = await axios.get<CsrfToken>(
    `${process.env.BACK_END_API_URL}/csrf`
  );
  console.log("data is here:",data);
  axios.defaults.headers.common["X-CSRF-Token"] = data.csrfToken;
};

export const getArticles = async () => {
  const res = await axios.get<ArticlesResponse[]>(
    `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/articles`
  );
  return res;
};

export const getArticleById = async (id: number) => {
  const res = await axios.get<ArticlesResponse>(
    `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/articles/${id}`
  );
  return res;
};

export const createArticles = async (article: ArticlesRequest) => {
  const res = await axios.post<ArticlesResponse>(
    `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/articles`,
    article
  );
  return res;
};

export const updateArticles = async (article: ArticlesRequest) => {
  const res = await axios.put<ArticlesResponse>(
    `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/articles/${article.id}`,
    article
  );
  return res;
};

export const deleteArticles = async (id: number) => {
  const res = await axios.delete<ArticlesResponse>(
    `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/articles/${id}`
  );
  return res;
};
