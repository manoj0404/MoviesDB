import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-6">
      <button
        className="px-4 py-2 mx-2 bg-gray-700 text-white rounded disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      <span className="text-white">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="px-4 py-2 mx-2 bg-gray-700 text-white rounded disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
