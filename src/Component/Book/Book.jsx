import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";

const Book = ({ book }) => {
  const { addToCart } = useOutletContext();
  const { image, title, price, isbn13 } = book;

  // State to track if the toast has been shown for this book
  const [isToastShown, setIsToastShown] = useState(false);

  // Toast configuration
  const notify = () =>
    toast.success("Item added to the cart successfully!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleAddToCart = () => {
    addToCart(isbn13);
    if (!isToastShown) {
      notify();
      setIsToastShown(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Next-Page | Books</title>
      </Helmet>
      <div className="border border-[#eee]">
        <Link to={`/book/${isbn13}`}>
          <img
            src={image}
            alt="book cover"
            className="object-cover h-[300px] w-full"
          />
        </Link>
        <div className="p-3">
          <Link to={`/book/${isbn13}`}>
            <h4 className="text-[13px] font-semibold hover:text-blue-500">
              {title}
            </h4>
          </Link>

          <p className="text-blue-500 mt-1 font-semibold text-[16px]">
            {price}
          </p>
          <div className="flex items-center justify-center">
            <button
              onClick={handleAddToCart}
              className="uppercase rounded-sm text-[11px] h-[26px] w-full text-white mt-2 bg-blue-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
