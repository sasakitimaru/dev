"use client";
import { createComment, createReply } from "@/api/postgres/postgresAPI";
import { CommentRequest, ReplyRequest } from "@/types/type";
import React, { useRef, useContext } from "react";
import { getComments } from "@/api/postgres/postgresAPI";
import { CommentContext, SnackOpenContext } from "./comment";

interface CommentPostFieldProps {
  articleId: number;
  commentId?: number;
  isReply: boolean;
  setIsClicked?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentPostField: React.FC<CommentPostFieldProps> = ({
  articleId,
  commentId,
  isReply,
  setIsClicked,
}) => {
  const [comment, setComment] = React.useState<CommentRequest>({
    article_id: articleId,
    replies: [],
    comment: "",
    author: "",
  });
  const [reply, setReply] = React.useState<ReplyRequest>({
    author: "",
    comment_id: commentId as number,
    comment: "",
  });
  const [commentLoading, setCommentLoading] = React.useState<boolean>(false);
  const { setComments } = useContext(CommentContext);
  const { setSuccessOpen, setErrorOpen } = useContext(SnackOpenContext);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const clearSendedData = () => {
    setComment({ article_id: articleId, replies: [], comment: "", author: "" });
    setReply({ author: "", comment_id: commentId as number, comment: "" });
    textareaRef.current!.value = "";
    inputRef.current!.value = "";
    if (setIsClicked) setIsClicked(false);
  };

  const handleSubmit = async (content: CommentRequest | ReplyRequest) => {
    if (content.comment?.length <= 5 || content.comment?.length >= 100) {
      alert("コメントは5文字以上100文字以下で入力してください。");
      return;
    }
    setCommentLoading(true);
    try {
      if (!isReply) await createComment(content as CommentRequest);
      else await createReply(content as ReplyRequest);
      setSuccessOpen(true);
      clearSendedData();
      setComments(await getComments(articleId));
      setCommentLoading(false);
    } catch (e) {
      setErrorOpen(true);
      console.error("posting error:", e);
      setCommentLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <textarea
        className="w-full h-28 px-4 p-4 rounded-none bg-inherit outline-none no-overflow-anchoring resize-none border-b-[1px] border-gray-300 dark:border-gray-700 text-base"
        placeholder="Comment"
        autoFocus={isReply}
        onChange={(e) => {
          isReply
            ? setReply({ ...reply, comment: e.target.value })
            : setComment({ ...comment, comment: e.target.value });
        }}
        ref={textareaRef}
      />
      <div className="flex flex-row justify-between items-center mt-2">
        <input
          type="text"
          className="w-28 h-10 px-4 p-4 bg-inherit outline-none rounded-none border-b-[1px] border-gray-300 dark:border-gray-700 text-base placeholder:text-sm"
          placeholder="Anonymous"
          onChange={(e) => {
            isReply
              ? setReply({ ...reply, author: e.target.value })
              : setComment({ ...comment, author: e.target.value });
          }}
          ref={inputRef}
        />
        <button
          className="bg-blue-400 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-800 text-white font-bold w-20 h-10 py-2 px-4 rounded"
          onClick={() =>
            isReply ? handleSubmit(reply) : handleSubmit(comment)
          }
        >
          {commentLoading ? (
            <span className="loading loading-spinner loading-sm" />
          ) : isReply ? (
            "Reply"
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
};

export default CommentPostField;
