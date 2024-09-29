import * as React from "react";
import { IPaginationProps, THandlePageChange } from "./types.ts";
import { getPageNumbers } from "./utils/getPageNumbers/getPageNumbers.ts";
import { CSSProperties } from "react";
import { paginationStyles } from "./styles.ts";

export const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (!totalPages) return null;

  const handlePageChange: THandlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) {
      console.error("No pages");
      return;
    }
    onPageChange(page);
  };

  return (
    <div style={paginationStyles.paginationWrapper}>
      <div style={paginationStyles.paginationContainer}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            ...paginationStyles.paginationArrow,
            ...(currentPage === 1 ? paginationStyles.disabled : {}),
          }}
        >
          &lt;
        </button>

        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          style={
            {
              ...paginationStyles.paginationItem,
              ...(currentPage === 1 ? paginationStyles.active : {}),
            } as CSSProperties
          }
        >
          1
        </button>

        {currentPage > 3 && (
          <span style={paginationStyles.paginationEllipsis}>...</span>
        )}

        {getPageNumbers(currentPage, totalPages).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={
              {
                ...paginationStyles.paginationItem,
                ...(page === currentPage ? paginationStyles.active : {}),
              } as CSSProperties
            }
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages - 2 && (
          <span style={paginationStyles.paginationEllipsis}>...</span>
        )}

        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          style={
            {
              ...paginationStyles.paginationItem,
              ...(currentPage === totalPages ? paginationStyles.active : {}),
            } as CSSProperties
          }
        >
          {totalPages}
        </button>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            ...paginationStyles.paginationArrow,
            ...(currentPage === totalPages ? paginationStyles.disabled : {}),
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
