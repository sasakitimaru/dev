import axios from "axios";
import {
  ArticlesRequest,
  ArticlesResponse,
  Comment,
  CommentRequest,
  Reply,
  ReplyRequest,
} from "@/types/type";
import { CsrfToken } from "@/types/type";

export const getCsrfToken = async () => {
  const { data } = await axios.get<CsrfToken>(
    `${process.env.BACK_END_API_URL}/csrf`
  );
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

export const getAllComments = async () => {
  const res = await axios.get<Comment[]>(
    `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/comments`
  );
  return res;
};

export const getCommentsByArticleId = async (id: number) => {
  const res = await axios.get<Comment[]>(
    `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/comments/article/${id}`
  );
  return res;
};

export const createComment = async (comment: CommentRequest) => {
  try {
    const res = await axios.post<Comment>(
      `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/comments`,
      comment
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (comment: CommentRequest) => {
  try {
    const res = await axios.put<Comment>(
      `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/comments/${comment.id}`,
      comment
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getRepliesByCommentId = async (id: number) => {
  const res = await axios.get<Reply[]>(
    `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/replies/comment/${id}`
  );
  return res;
};

export const createReply = async (reply: ReplyRequest) => {
  try {
  const res = await axios.post<Reply>(
    `${process.env.NEXT_PUBLIC_BACK_END_API_URL}/replies`,
    reply
  );
  return res;
  } catch (error) {
    throw error;
  }
};

export const getComments = async (id: number) => {
  const res = await getCommentsByArticleId(id);
  const comments: Comment[] = res.data.map((comment) => ({
    ...comment,
    isReply: false,
  }));
  await Promise.all(
    comments.map(async (comment) => {
      const res = await getRepliesByCommentId(comment.id);
      const replies: Reply[] = res.data.map((reply) => ({
        ...reply,
        isReply: true,
      }));
      comment.replies = replies;
    })
  );
  return comments;
};
