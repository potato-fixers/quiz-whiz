import React, { useContext } from "react";
import { Button } from "@mui/material";

// Components
import BasicModal from "./Modal";

// Hooks
import { usePagination } from "./hooks/usePagination";

// Context
import { UserContext } from "../global/UserContext";

const Pagination = (props) => {
  const { isLoggedIn } = useContext(UserContext);

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
    // If the user didn't Answer the Question, 
    // Submit a default answer for rendering the Review Section
    if (!localStorage.getItem(currentPage)) {
      localStorage.setItem(`${currentPage}`, JSON.stringify({ key: 'incAns1', value: 'You Didn\'t Answer This One', question: currentPage }));
    }

    // Check if we're on the last page or not
    if (currentPage !== lastPage) {
      onPageChange(currentPage + 1);
    } else {
      // If page is last, redirect to Quiz Summary + deactivate Quiz
      localStorage.setItem('quizActive', 1);
      window.location.href = `/quiz/${props.quizId}/summary`;
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    currentPage &&
    <ul id="pagination">
      <li className="arrow left" onClick={onPrevious}>
        {(currentPage === 1) ?(<BasicModal message="&lt;" />) :
        (<Button variant="contained">&lt;</Button>)}
      </li>

      {isLoggedIn ? (
        <BasicModal message="Dashboard" />
      ) : (
        <BasicModal message="Back Home" />
      )}

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
