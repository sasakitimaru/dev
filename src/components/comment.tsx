import React from "react";
import { Comment, Reply } from "@/types/type";
import {
  getCommentsByArticleId,
  getRepliesByCommentId,
} from "@/lib/postgresAPI";
import CommentPostField from "./commentpostfield";
import CommentList from "./commentlist";

const getComments = async (id: number) => {
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

const CommentField = async ({ articleId }: { articleId: number }) => {
  const comments = await getComments(articleId);
  console.log("articleId:",articleId)
  return (
    <div className="bg-white dark:bg-gray-800 w-full rounded-lg prose prose-sm lg:prose-base dark:prose-invert p-4 mt-10 mb-10 lg:px-8 ">
      <h3 className="mb-2 p-2 text-center te border-b-[1px] border-gray-300 dark:border-gray-700">
        Conversation
      </h3>
      {comments &&
        comments.map((comment, index) => (
          <React.Fragment key={index}>
            <CommentList content={comment} articleId={articleId} />
            {comment.replies?.map((reply, index) => (
              <React.Fragment key={index}>
                <CommentList content={reply} articleId={articleId} />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      <CommentPostField articleId={articleId} isReply={false} />
    </div>
  );
};

export default CommentField;
