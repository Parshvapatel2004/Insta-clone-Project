import { createContext, useState } from "react";

export const FeedContext = createContext();

export const FeedContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [feed, setFeed] = useState(null);

  <FeedContext.Provider
    value={{ loading, setLoading, post, setPost, feed, setFeed }}
  >
    {children}
  </FeedContext.Provider>;
};
