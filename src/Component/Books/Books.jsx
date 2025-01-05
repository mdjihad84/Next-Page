import { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "../Book/Book";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Books = () => {
  const { books } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }

  // Calculate total pages
  const totalPages = Math.ceil(books.length / itemsPerPage);

  // Get books for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBooks = books.slice(startIndex, startIndex + itemsPerPage);

  // Pagination handler
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mt-2">
      {/* Books Grid */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-6 lg:mb-8 p-8 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {currentBooks.map((book) => (
          <Book book={book} key={book.isbn13} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-2 my-4 mb-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Books;
