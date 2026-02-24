import { RouterProvider } from "react-router-dom";
import { router } from "./App.routes";
import "./Features/Shared/global.scss";
import { AuthProvider } from "./Features/Auth/auth.context";
import { FeedContextProvider } from "./Features/post/post.context";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <FeedContextProvider>
          <RouterProvider router={router} />
        </FeedContextProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
