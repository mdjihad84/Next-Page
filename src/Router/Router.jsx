import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Home/Home";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Books from "../Component/Books/Books";
import BookInfo from "../Component/BookInfo/BookInfo";
import About from "../Component/About/About";
import Cart from "../Component/Cart/Cart";

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
        path: "cart",
        element: <Cart></Cart>,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);
