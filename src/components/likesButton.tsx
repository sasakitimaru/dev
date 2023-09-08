"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect, useRef } from "react";
import heartAnimation from "../assets/animation/heart-animation.json";
import { ArticlesResponse } from "@/types/type";
import { updateArticles } from "@/lib/postgresAPI";

interface FavoriteIconAnimProps {
  article?: ArticlesResponse;
}

const addLikes = async (article: ArticlesResponse) => {
  const articleForUpdate = {
    ...article,
    likes: article.likes + 1,
  };
  await updateArticles(articleForUpdate);
};

const cancelLikes = async (article: ArticlesResponse) => {
  await updateArticles(article);
};

export const FavoriteIconAnim: React.FC<FavoriteIconAnimProps> = ({
  article,
}) => {
  const playerRef = useRef<Player>(null);
  const [liked, setLiked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    if (article) {
      setLikes(article.likes);
      if (!playerRef.current) {
        return;
      }
      if (liked) {
        playerRef.current.play();
        (async () => {
          await addLikes(article);
        })();
        setLikes(article.likes + 1);
      } else {
        playerRef.current.stop();
        (async () => {
          await cancelLikes(article);
        })();
        setTimeout(() => {
          setLikes(article.likes);
        }, 1000);
      }
    }
  }, [liked]);

  const handleLike = () => {
    if (disabled) return;
    setLiked(!liked);
    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleLike}
        className="w-10 h-10  rounded-full border border-gray-300 relative overflow-hidden"
        disabled={disabled}
      >
        <Player
          ref={playerRef}
          speed={1}
          keepLastFrame
          src={heartAnimation}
          className="w-48 h-48 overflow-hidden rounded-full absolute -top-[77.5px] -left-[77.5px]"
        />
      </button>
      <p className="text-center text-sm ml-2">{likes}</p>
    </div>
  );
};
