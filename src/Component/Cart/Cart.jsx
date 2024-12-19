import {
  useLoaderData,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Cart = () => {
  // Fetch the books data from loader
  const bookData = useLoaderData();

  // Get the cart items (array of `isbn13` values) from context
  const { cart, removeFromCart } = useOutletContext();

  // Filter books from `bookData` based on `isbn13` in the cart
  const booksInCart = cart.map((item) =>
    bookData.books.find((book) => book.isbn13 === item)
  );

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <h1>cart page</h1>
      {booksInCart.length > 0 ? (
        <ul>
          {booksInCart.map((book, index) => (
            <li key={index}>
              <p>{book.title}</p>
              <p>Price: {book.price}</p>
              <button onClick={() => removeFromCart(book.isbn13)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
