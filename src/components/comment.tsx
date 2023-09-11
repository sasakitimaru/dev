"use client";
import React, { useEffect, createContext } from "react";
import { Comment, Reply } from "@/types/type";
import CommentPostField from "./commentpostfield";
import CommentList from "./commentlist";
import { getComments } from "@/api/postgresAPI";
interface CommentContextProps {
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}
export const CommentContext = createContext<CommentContextProps>(
  {} as CommentContextProps
);

const CommentField = ({ articleId }: { articleId: number }) => {
  const [comments, setComments] = React.useState<Comment[]>([]);
  useEffect(() => {
    const getAndSetComments = async () => {
      const comments = await getComments(articleId);
      setComments(comments);
    };
    getAndSetComments();
  }, [articleId]);

  return (
    <div className="bg-white dark:bg-gray-800 w-full rounded-lg prose prose-sm lg:prose-base dark:prose-invert p-4 mt-10 mb-10 lg:px-8 ">
      <CommentContext.Provider value={{ comments, setComments }}>
        <h3 className="mb-2 p-2 text-center te border-b-[1px] border-gray-300 dark:border-gray-700">
          Conversation
        </h3>
        {comments &&
          comments.map((comment, index) => (
            <React.Fragment key={index}>
              <CommentList content={comment} articleId={articleId} />
              {comment.replies?.map((reply, index) => (
                <React.Fragment key={index}>
                  <CommentList
                    content={reply}
                    articleId={articleId}
                    isEndOfReply={index + 1 === comment.replies.length}
                  />
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        <CommentPostField articleId={articleId} isReply={false} />
      </CommentContext.Provider>
    </div>
  );
};

export default CommentField;
