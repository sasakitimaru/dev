"use client";
import React, { useEffect, createContext } from "react";
import { Comment, Reply } from "@/types/type";
import CommentPostField from "./commentpostfield";
import CommentList from "./commentlist";
import { getComments } from "@/api/postgres/postgresAPI";

export const CommentContext = createContext<{
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}>(
  {} as any
);

export const SnackOpenContext = createContext<{
  successOpen: boolean;
  errorOpen: boolean;
  setSuccessOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({} as any);

const CommentField = ({ articleId }: { articleId: number }) => {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [errorOpen, setErrorOpen] = React.useState(false);

  useEffect(() => {
    const getAndSetComments = async () => {
      const comments = await getComments(articleId);
      setComments(comments);
    };
    getAndSetComments();
  }, [articleId]);

  return (
    <div className="bg-white dark:bg-gray-800 w-full sm:rounded-lg prose prose-sm lg:prose-base dark:prose-invert p-4 mt-10 mb-10 mx-auto lg:mx-0 lg:px-8 ">
      <CommentContext.Provider value={{ comments, setComments }}>
        <SnackOpenContext.Provider value={{ successOpen, errorOpen, setSuccessOpen, setErrorOpen }}>
          <p className="mb-2 p-2 text-center te border-b-[1px] border-gray-300 dark:border-gray-700">
            Conversation
          </p>
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
        </SnackOpenContext.Provider>
      </CommentContext.Provider>
    </div>
  );
};

export default CommentField;
