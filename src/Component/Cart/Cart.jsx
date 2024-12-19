import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../../utility/localstorage";

const Cart = () => {
  const books = useLoaderData();

  useEffect(() => {
    const storedBooksId = getStoredBook();
    const cartBook = books.books.filter((book) =>
      storedBooksId.includes(book.isbn13)
    );
    console.log(cartBook);
  }, [books]);

  return (
    <div>
      <h1>cart page</h1>
    </div>
  );
};

export default Cart;
