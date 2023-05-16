const CategoryList = (props) => {

  const handleClick = (event) => {
    props.setCategory(event.target.innerText);
  }

  return (
      <div className="landing_category_list">
        <button onClick={handleClick}>General Knowledge</button>
        <button onClick={handleClick}>Art</button>
        <button onClick={handleClick}>History</button>
        <button onClick={handleClick}>Policits</button>
        <button onClick={handleClick}>Sports</button>
      </div>
  );
};

export default CategoryList;