import React, { useState, useEffect } from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  currentPage,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [displayPages, setDisplayPages] = useState<number[]>([]);

  useEffect(() => {
    generateDisplayPages();
  }, [totalPages, currentPage]);

  const generateDisplayPages = () => {
    const newDisplayPages: number[] = [];
    const maxDisplayPages = 10;

    if (totalPages <= maxDisplayPages) {
      for (let i = 1; i <= totalPages; i++) {
        newDisplayPages.push(i);
      }
    } else {
      const startPage = Math.max(
        1,
        currentPage - Math.floor(maxDisplayPages / 2)
      );
      const endPage = Math.min(totalPages, startPage + maxDisplayPages - 1);

      for (let i = startPage; i <= endPage; i++) {
        newDisplayPages.push(i);
      }
    }

    setDisplayPages(newDisplayPages);
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    return displayPages.map((pageNumber) => (
      <li
        key={pageNumber}
        className={pageNumber === currentPage ? "active" : ""}
      >
        <button onClick={() => handlePageChange(pageNumber)}>
          {pageNumber}
        </button>
      </li>
    ));
  };

  return (
    <div>
      <ul className="pagination">
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
