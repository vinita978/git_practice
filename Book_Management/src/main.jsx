import React,{lazy, Suspense} from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import BookList from "./components/BookList.jsx";
import { Books } from "./utils/mockdata.js";
import BookDetail from "./components/BookDetail.jsx";
import Demo from "./components/Demo.jsx";
// creating Routing counfiguration
const about=lazy(()=>import("./components/About.jsx"))
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BookList BookData={Books} />,
      },
      {
        path: "/about",
        element: <Suspense><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
      {
        path: "/book/:id",
        element: <BookDetail />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
