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
            <div key={index} className="">
              <img
                src={book.image}
                alt="book cover"
                className="object-cover h-[35rem] w-full lg:h-56 md:h-64 xl:h-80"
              />
              <h4 className="text-2xl font-bold">{book.title}</h4>
              <p className="mt-auto">price: {book.price}</p>
              <button onClick={() => removeFromCart(book.isbn13)}>
                Remove
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
