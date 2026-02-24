import { useEffect } from "react";
import Post from "../components/Post";
import "../style/feed.scss";
import { usePost } from "../hooks/usePost";

const Feed = () => {
  const { feed, loading, handleFeed } = usePost();
  useEffect(() => {
    handleFeed();
  }, []);

  if (loading || !feed) {
    return (
      <main>
        <h1>Feed is loading</h1>
      </main>
    );
  }
  console.log(feed);
  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
          <Post />
        </div>
      </div>
    </main>
  );
};

export default Feed;
