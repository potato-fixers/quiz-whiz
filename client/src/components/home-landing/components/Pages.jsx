import { useState, useEffect } from 'react';

const Pages = (props) => {
  const [limit, setLimit] = useState(0);
  useEffect(() => {
    let newLimit = Math.floor(props.quizzes.length / 5);
    setLimit(newLimit + 1)
  }, [props.quizzes]);

  const handleClick = (event) => {
    let newpage;
    if (event.target.innerText === '≺') {
      newpage = props.page - 1;
    } else if (event.target.innerText === '≻') {
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
        {props.page > 0 ? <div onClick={handleClick}>&#8826;</div> : null}
        {props.page > 0 ? <div>...</div> : null}
        <div className="landing_pages_current">{props.page + 1}</div>
        {props.page + 1 < limit ?  <div onClick={handleClick}>{props.page + 2}</div> : null}
        {props.page + 2 < limit ?  <div onClick={handleClick}>{props.page + 3}</div> : null}
        {props.page + 3 < limit ?  <div onClick={handleClick}>{props.page + 4}</div> : null}
        {props.page + 4 < limit ?  <div onClick={handleClick}>{props.page + 5}</div> : null}
        {props.page + 5 < limit ?  <div>...</div>  : null}
        {props.page < limit ? <div onClick={handleClick}>&#8827;</div> : null}
      </div>
  );
};

export default Pages;