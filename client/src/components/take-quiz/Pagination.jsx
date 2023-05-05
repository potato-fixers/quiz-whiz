import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { usePagination } from "./hooks/usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalQuestions,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalQuestions,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    if (currentPage !== lastPage) {
      onPageChange(currentPage + 1);
    } else {
      window.location.href = "/quiz/:id/summary";
    }
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul id="pagination">
      <li className="arrow left" onClick={onPrevious}>
        <Button>&lt;</Button>
      </li>

      {paginationRange.map((pageNumber) => {
        return (
          <li key={pageNumber} onClick={() => onPageChange(pageNumber)}>
            <Button>{pageNumber}</Button>
          </li>
        );
      })}

      <li className="arrow right" onClick={onNext}>
        <Button>&gt;</Button>
      </li>
    </ul>
  );
};

export default Pagination;
