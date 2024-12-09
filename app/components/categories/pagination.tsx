'use client'
import React, { JSX, useState } from "react";

const Pagination = ({ totalPages = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages: (JSX.Element | string)[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-4 py-2 border rounded-lg ${
              i === currentPage
                ? "bg-gray-200 text-gray-900"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {i}
          </button>
        );
      } else if (typeof pages[pages.length - 1] !== "string") {
        pages.push("...");
      }
    }

    return pages.map((page, index) =>
      typeof page === "string" ? (
        <span key={index} className="px-4">
          {page}
        </span>
      ) : (
        page
      )
    );
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-6">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`flex items-center px-4 py-2 border rounded-lg text-gray-500 ${
          currentPage === 1
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-100"
        }`}
      >
        ← Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">{renderPageNumbers()}</div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center px-4 py-2 border rounded-lg text-gray-500 ${
          currentPage === totalPages
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-100"
        }`}
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;

