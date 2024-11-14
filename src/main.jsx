import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./route/route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
);