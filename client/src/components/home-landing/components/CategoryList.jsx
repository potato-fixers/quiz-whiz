const CategoryList = (props) => {

  const handleClick = (event) => {
    props.setCategory(event.target.innerText);
  }

  return (
      <div className="landing_category_list">
        <button onClick={handleClick}>General Knowledge</button>
        <button onClick={handleClick}>Entertainment: Video Games</button>
        <button onClick={handleClick}>Science: Computers</button>
        <button onClick={handleClick}>Sports</button>
        <button onClick={handleClick}>Art</button>
      </div>
  );
};

export default CategoryList;