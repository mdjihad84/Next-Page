import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Books = () => {
  const { books } = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mt-2">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-6 lg:mb-8 py-16 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {books.map((book) => (
          <Book book={book} key={book.isbn13} />
        ))}
      </div>
    </div>
  );
};

export default Books;
