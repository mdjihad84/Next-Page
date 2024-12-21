import { Link, useOutletContext } from "react-router-dom";

const Book = ({ book }) => {
  const { addToCart } = useOutletContext();
  const { image, title, price, isbn13 } = book;
  return (
    <div className="border border-[#eee]">
      <Link to={`/book/${isbn13}`}>
        <img
          src={image}
          alt="book cover"
          className="object-cover h-[300px] w-full "
        />
      </Link>
      <div className="p-3">
        <Link to={`/book/${isbn13}`}>
          <h4 className="text-[13px] font-semibold hover:text-blue-500">
            {title}
          </h4>
        </Link>

        <p className="text-blue-500 mt-1 font-semibold text-[16px]">{price}</p>
        <div className="flex items-center justify-center">
          <button
            onClick={() => addToCart(isbn13)}
            className="uppercase rounded-sm text-[11px]  h-[26px] w-full text-white mt-2 bg-blue-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
