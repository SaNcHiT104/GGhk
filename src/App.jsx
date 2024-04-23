import React from "react";
import FrontPage from "./Components/FrontPage/FrontPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Search from "./Components/FrontPage/Search/Search";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <FrontPage />,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
