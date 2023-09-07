"use client";
import React, { useEffect } from "react";
import { Avatar } from "@mui/material";
import { Comment, Reply } from "@/types/type";
import CommentPostField from "./commentpostfield";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

interface ContentProps {
  content: Comment | Reply;
  articleId: number;
}
const CommentList: React.FC<ContentProps> = ({ content, articleId }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const dateObj = new Date(content.created_at);

  return (
    <div
      className={`flex flex-col border-b-[1px] relative border-gray-300 dark:border-gray-700 p-1
    ${
      content.isReply &&
      `before:absolute
        before:content-['']
        before:h-[70%]
        before:w-[2px]
        before:top-5
        before:left-5
        before:bg-gray-300
        before:dark:bg-gray-500`
    }
    `}
    >
      <div className="flex items-center mt-2">
        <Avatar className="mr-2 h-8 w-8" />
        <b className="mr-1 text-xs">{content.author}</b>
        <p className={content.isReply ? "text-xs" : ""}>
          {dateObj.getFullYear()}-
          {String(dateObj.getMonth() + 1).padStart(2, "0")}-
          {String(dateObj.getDate()).padStart(2, "0")}
        </p>
      </div>
      <p className={content.isReply ? "ml-12" : ""}>{content.comment}</p>
      <div className="bg-white dark:bg-gray-800 z-10">
        {content.isReply ? (
          <button
            className="text-xs mr-auto mb-2 border rounded-lg border-gray-300 dark:border-gray-700 p-1"
            onClick={() => setIsClicked(!isClicked)}
          >
            Add Reply
          </button>
        ) : (
          <button
            className="flex ml-auto mr-4 mb-4"
            onClick={() => setIsClicked(!isClicked)}
          >
            <ChatBubbleOutlineIcon className="items-end" />
          </button>
        )}

        {isClicked && (
          <div className="mb-2">
            {content.isReply ? (
              <CommentPostField
                articleId={articleId}
                isReply={true}
                commentId={content.comment_id}
                setIsClicked={setIsClicked}
              />
            ) : (
              <CommentPostField
                articleId={articleId}
                isReply={true}
                commentId={content.id}
                setIsClicked={setIsClicked}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentList;
