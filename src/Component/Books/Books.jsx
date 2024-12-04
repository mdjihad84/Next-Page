import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "../Book/Book";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Books = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const { books } = useLoaderData();
  return (
    <div className="my-container">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-6 lg:mb-8">
        {books.map((book) => (
          <Book book={book} key={book.isbn13}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
