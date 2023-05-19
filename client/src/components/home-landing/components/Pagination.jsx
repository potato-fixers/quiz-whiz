import { useState, useEffect } from 'react';

const Pagination = (props) => {
  const [limit, setLimit] = useState(0);
  useEffect(() => {
    let newLimit = Math.floor(props.quizzes.length / 5);
    if (props.quizzes.length / 5 === newLimit) {
      setLimit(newLimit);
    } else {
      setLimit(newLimit + 1);
    }
  }, [props.quizzes]);

  const handleClick = (event) => {
    let newpage;
    if (event.target.innerText === '≺ Prev') {
      newpage = props.page - 1;
    } else if (event.target.innerText === 'Next ≻') {
      newpage = props.page + 1;
    } else {
      newpage = parseInt(event.target.innerText) - 1;
    }

    let arr = [];
    if (props.quizzes.length >= newpage * 5 + 5) {
      for (var i = newpage * 5; i < newpage * 5 + 5; i ++) {
        arr.push(props.quizzes[i]);
      }
    } else {
      for (var j = newpage * 5; j < props.quizzes.length; j ++) {
        arr.push(props.quizzes[j]);
      }
    }
    props.setCurrent(arr);
    props.setPage(newpage);
  }


  return (
      <div className="landing_pages">
        <div id="landing_page_prev">{props.page > 0 ? <span onClick={handleClick}>&#8826; Prev</span> : null}</div>
        <div className="landing_page_pages">
            {props.page - 1 > 0 ? <span id="landing_page_first" onClick={handleClick}>1</span> : null}
            {props.page - 1 > 0 ? <span id="landing_page_dot">...</span> : null}
            {props.page > 0 ? <span id="landing_page_leftone" onClick={handleClick}>{props.page}</span> : null}
            {limit === 1 || limit === 0 ? null: <span id="landing_page_currentone"><strong>{props.page + 1}</strong></span>}
            {props.page + 1 < limit ?  <span id="landing_page_rightone" onClick={handleClick}>{props.page + 2}</span> : null}
            {props.page + 2 < limit ?  <span id="landing_page_dot">...</span> : null}
            {props.page + 2 < limit ? <span id="landing_page_last" onClick={handleClick}>{limit}</span> : null}
            <div id="landing_page_next">{props.page + 1 < limit ? <span onClick={handleClick}>Next &#8827;</span> : null }</div>
        </div>
      </div>
  );
};

export default Pagination;