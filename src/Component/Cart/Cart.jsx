import {
  useLoaderData,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Cart = () => {
  const bookData = useLoaderData();
  const { cart, removeFromCart } = useOutletContext();

  const booksInCart = cart.map((item) =>
    bookData.books.find((book) => book.isbn13 === item)
  );

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  const calculateTotal = () =>
    booksInCart.reduce((acc, book) => acc + parseFloat(book.price.slice(1)), 0);

  return (
    <div className="my-container py-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
        Your Shopping Cart
      </h1>

      {booksInCart.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="flex-1">
            {booksInCart.map((book, index) => (
              <div
                key={index}
                className="flex items-center gap-6 p-5 mb-5 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
              >
                {/* Book Image */}
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-24 h-32 object-cover rounded-lg"
                />

                {/* Book Details */}
                <div className="flex flex-col flex-1">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {book.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Price: <span className="font-medium">{book.price}</span>
                  </p>
                  <button
                    onClick={() => removeFromCart(book.isbn13)}
                    className="mt-4 w-max px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-16 p-5 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-5">
                Cart Summary
              </h2>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-700">Items:</p>
                <span className="font-semibold">{booksInCart.length}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-700">Total Price:</p>
                <span className="font-semibold text-gray-800">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
              <button
                className="w-full px-4 py-3 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => alert("Proceeding to Checkout!")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="Empty Cart"
            className="w-40 h-40 mb-6"
          />
          <p className="text-lg font-semibold text-gray-700">
            Your cart is empty. Start adding some books!
          </p>
          <a
            href="/"
            className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
          >
            Browse Books
          </a>
        </div>
      )}
    </div>
  );
};

export default Cart;
