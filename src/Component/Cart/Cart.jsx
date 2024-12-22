import {
  Link,
  useLoaderData,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <title>Next-Page | Cart</title>
      </Helmet>
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {booksInCart.length > 0 ? (
          <div className="mt-5">
            <div className="bg-white">
              <table className="w-full text-left">
                <thead className="">
                  <tr className="border-b">
                    <th className="px-4 py-2 text-right">Product</th>
                    <th className="px-4 py-2"></th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2 hidden lg:block">Quantity</th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {booksInCart.map((book, index) => (
                    <tr key={index} className="border-b">
                      <td className=" px-4 py-2">
                        <img
                          src={book.image}
                          className="w-[60px] h-[60px]"
                          alt=""
                        />
                      </td>
                      <td className=" px-4 py-2">{book.title}</td>
                      <td className=" px-4 py-2">{book.price}</td>
                      <td className=" px-4 py-2 hidden lg:block">1</td>
                      <td className=" px-4 py-2 text-center">
                        <button
                          className="text-red-600"
                          onClick={() => removeFromCart(book.isbn13)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-between py-2">
                <Link to="/">
                  <h4 className="text-[13px] font-semibold hover:text-blue-500">
                    Return to shop
                  </h4>
                </Link>
                <div>Continue to Shipping</div>
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
      </section>
    </>
  );
};

export default Cart;
