"use client";
import React from "react";
import { Avatar } from "@mui/material";
import { Comment, Reply } from "@/types/type";
import CommentPostField from "./commentpostfield";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { dateFormatter } from "@/lib/formatter";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { SnackOpenContext } from "./comment";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ContentProps {
  content: Comment | Reply;
  articleId: number;
  isEndOfReply?: boolean;
}
const CommentList: React.FC<ContentProps> = ({ content, articleId, isEndOfReply }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const { successOpen, errorOpen, setSuccessOpen, setErrorOpen } = React.useContext(SnackOpenContext);
  const formattedDate = dateFormatter(content.created_at);

  return (
    <div
      className={`flex flex-col border-b-[1px] relative border-gray-300 dark:border-gray-700 p-1
    ${content.isReply &&
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
          {formattedDate}
        </p>
      </div>
      <p className={content.isReply ? "ml-12" : ""}>{content.comment}</p>
      <div className="bg-white dark:bg-gray-800 z-10">
        {content.isReply ? (
          isEndOfReply ? (
            <button
              className="text-xs mr-auto mb-2 border rounded-lg border-gray-300 dark:border-gray-700 p-1"
              onClick={() => setIsClicked(!isClicked)}
            >
              Add Reply
            </button>
          ) : (
            null
          )
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
      <Snackbar open={successOpen} autoHideDuration={6000} onClose={() => setSuccessOpen(false)}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Message sended successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={errorOpen} autoHideDuration={6000} onClose={() => setErrorOpen(false)}>
        <Alert onClose={() => setErrorOpen(false)} severity="error" sx={{ width: '100%' }}>
          Error occured when sending message. Please try again later.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CommentList;
