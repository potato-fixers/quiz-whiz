import React, { useContext } from "react";
import { Button } from "@mui/material";

// Components
import BasicModal from "./Modal";

// Hooks
import { usePagination } from "./hooks/usePagination";

// Context
import { UserContext } from "../global/UserContext";
import { QuizContext } from "../take-quiz/context/QuizContext";

const Pagination = (props) => {
  const { isLoggedIn } = useContext(UserContext);
  const { setFinished } = useContext(QuizContext);

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
      setFinished(true);
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
        <BasicModal message="My Dashboard" />
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
