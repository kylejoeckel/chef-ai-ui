import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AppToolBar } from "./components/AppToolBar";
import { ChefAiFooter } from "./components/Footer";
import "./index.css";
import { AboutChefAi } from "./routes/about";
import { BlogChefAi } from "./routes/blog";
import { BlogPageChefAi } from "./routes/blog/BlogPage";
import { ContactChefAi } from "./routes/contact";
import { HomePage } from "./routes/home";
import { LogIn } from "./routes/login";
import PageNotFound from "./routes/pageNotFound";
import { PoliciesChefAi } from "./routes/policies";
import { Recipes } from "./routes/recipes";
import { SignUp } from "./routes/signup";


const router = createBrowserRouter([
  {
    path: "/recipes",
    element: <Recipes />,
  },
  {
    path: "/about",
    element: <AboutChefAi />,
  },
  {
    path: "/contact",
    element: <ContactChefAi />,
  },
  {
    path: "/policies",
    element: <PoliciesChefAi />,
  },
  {
    path: "/blogs",
    element: <BlogChefAi/>,
  },
  {
    path: "/blogs/:blogTitle",
    element: <BlogPageChefAi/>,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/log-in",
    element: <LogIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppToolBar />
    <RouterProvider router={router} />
    <ChefAiFooter/>
  </React.StrictMode>
);