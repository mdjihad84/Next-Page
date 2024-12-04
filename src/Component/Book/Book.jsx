import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, title, price, subtitle, isbn13 } = book;
  return (
    <Link to={`/book/${isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded-lg shadow-lg hover:shadow-2xl">
        <img
          src={image}
          alt="book cover"
          className="object-cover w-full h-56 md:h-64 xl:h-80"
        />
        <div className="bg-black flex flex-col bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 px-6 py-4">
          <p className="text-2xl font-bold">{title}</p>
          <p>{subtitle.substring(0, 45)}...</p>
          <br />
          <p className="mt-auto">price: {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
