import React, { useState } from "react";
import { Button, Dialog } from "@mui/material";
import { usePagination } from "./hooks/usePagination";
import BasicModal from "./Modal";
const Pagination = (props) => {
  const [clicked, setClicked] = useState(false);

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

      <BasicModal message="Home" />
      <BasicModal message="My Dashboard" />

      <li className="arrow right" onClick={onNext}>
        <Button>&gt;</Button>
      </li>
    </ul>
  );
};

export default Pagination;
