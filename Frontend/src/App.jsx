import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./App.routes";
import './Features/Shared/global.scss'
import { AuthProvider } from "./Features/Auth/auth.context";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
};

export default App;
