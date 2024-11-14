import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../Layout/HomeLayout";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/news",
    element: <h1>This is news</h1>,
  },
  {
    path: "/auth",
    element: <h1>This is auth</h1>,
  },
]);
