export interface Mode {
  mode: "dark" | "light" | "system";
}

export type Selected = {
  [key in Mode["mode"]]: boolean;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description?: string;
  date: string;
  tags: string[];
  categories: string[];
};

export interface ArticlesRequest {
  id?: number;
  title: string;
  likes: number;
}

export interface ArticlesResponse extends ArticlesRequest {
  id: number;
}

export type CsrfToken = {
  csrfToken: string;
};

export interface Comment extends CommentRequest {
  id: number;
  created_at: string;
  isReply: false;
}

export interface CommentRequest {
  id?: number;
  article_id: number;
  replies: Reply[];
  author: string;
  comment: string;
  created_at?: string;
  isReply?: false;
}

export interface Reply {
  id: number;
  comment_id: number;
  author: string;
  comment: string;
  created_at: string;
  isReply: true;
}

export interface ReplyRequest {
  id?: number;
  comment_id: number;
  author: string;
  comment: string;
  created_at?: string;
  isReply?: true;
}