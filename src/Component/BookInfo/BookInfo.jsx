import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { saveBook } from "../../utility/localstorage";

const BookInfo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fold, setFold] = useState(true);
  const bookData = useLoaderData();
  const {
    image,
    isbn13,
    title,
    desc,
    authors,
    publisher,
    year,
    rating,
    url,
    price,
  } = bookData;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleBookData = (id) => {
    saveBook(id);
  };

  return (
    <div className="my-container">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className=" lg:w-1/2 h-full">
          <img
            src={image}
            alt="book cover"
            className="object-cover w-full  lg:h-full"
          />
        </div>
        <div className="p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div className="text-end">
            <button
              onClick={() => handleBookData(isbn13)}
              className="btn btn-primary text-white">
              Add to cart
            </button>
          </div>
          <div>
            <p className="badge">Brand new</p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            {title}
          </h5>
          <h5 className="text-gray-900">Authors: {authors.substring(0, 50)}</h5>
          <p className="text-gray-900">Publisher: {publisher}</p>
          <p className="text-gray-900">Year: {year}</p>
          <p className="mb-5 text-gray-900">Rating: {rating}</p>
          {fold ? (
            <>
              <p className="text-gray-500">{desc.substring(0, 100)}.....</p>
              <span
                className="cursor-pointer text-blue-600"
                onClick={() => setFold(!fold)}>
                Read More
              </span>
            </>
          ) : (
            <>
              <p className="text-gray-900">{desc}</p>
              <span
                className="cursor-pointer text-blue-600"
                onClick={() => setFold(!fold)}>
                Read Less
              </span>
            </>
          )}

          <div className="flex gap-5 mt-8 items-center">
            <a href={url} target="_blank" className="btn">
              Buy Now
            </a>
            <p className="items-center font-extrabold text-gray-600">
              Price: {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
