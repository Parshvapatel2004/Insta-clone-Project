import { useContext } from "react";
import { FeedContext } from "../post.context";
import { getFeed } from "../services/post.api";

export const usePost = () => {
  const context = useContext(FeedContext);
  const { feed, setFeed, post, setPost, loading, setLoading } = context;

  const handleFeed = async () => {
    setLoading(true);
    const data = await getFeed();
    setFeed(data.posts);
    setLoading(false);
  };

  return { feed, loading, handleFeed, post };
};
