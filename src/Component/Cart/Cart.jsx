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
    <div className="my-container py-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Your Cart
      </h1>
      {booksInCart.length > 0 ? (
        <ul className="space-y-6">
          {booksInCart.map((book, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg shadow-md bg-white"
            >
              <div className="flex items-center gap-4">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-16 h-24 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {book.title}
                  </h2>
                  <p className="text-sm text-gray-600">Price: {book.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(book.isbn13)}
                className="mt-4 sm:mt-0 btn btn-danger text-sm px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-lg text-gray-600">
          Your cart is empty. Start adding some books!
        </p>
      )}
    </div>
  );
};

export default Cart;
