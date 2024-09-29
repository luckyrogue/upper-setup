import { TGetPageNumbers } from "./types.ts";

export const getPageNumbers: TGetPageNumbers = (currentPage, totalPages) => {
  const pages: number[] = [];
  const startPage: number = Math.max(currentPage - 2, 1);
  const endPage: number = Math.min(currentPage + 2, totalPages);

  if (!currentPage) console.error("No current page");
  if (!totalPages) console.error("No total pages");

  for (let i: number = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
};
