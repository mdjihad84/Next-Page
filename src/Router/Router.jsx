import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Home/Home";
import Books from "../Component/Book/Book";
import BookInfo from "../Component/BookInfo/BookInfo";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import About from "../Component/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books",
        element: <Books></Books>,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "book/:id",
        element: <BookInfo></BookInfo>,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);
