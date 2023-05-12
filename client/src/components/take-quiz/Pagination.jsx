import React from "react";
import { Button } from "@mui/material";
import { usePagination } from "./hooks/usePagination";
import BasicModal from "./Modal";

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
      window.location.href = `/quiz/${props.quizId}/summary`;
    }
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul id="pagination">
      <li className="arrow left" onClick={onPrevious}>
        <Button variant="contained">&lt;</Button>
      </li>

      <BasicModal message="Home" />
      <BasicModal message="My Dashboard" />

      <li className="arrow right" onClick={onNext}>
        {currentPage === lastPage ? (
          <Button variant="contained">Submit</Button>
        ) : (
          <Button variant="contained">&gt;</Button>
        )}
      </li>
    </ul>
  );
};

export default Pagination;
