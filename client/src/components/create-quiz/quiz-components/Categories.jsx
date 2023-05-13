import "../styles/create-quiz.css";


const Categories = (props) => {
  return (
    <div className="Categories">
      <h1> Choose Your Category </h1>
      <button
        name="Art"
        className={`category${props.art ? "chosen" : ""}`}
        onClick={props.select}
      >
        {" "}
        Art{" "}
      </button>
      <button
        name="General Knowledge"
        className={`category${props.general ? "chosen" : ""}`}
        onClick={props.select}
      >
        {" "}
        General Knowledge{" "}
      </button>
      <button
        name="History"
        className={`category${props.history ? "chosen" : ""}`}
        onClick={props.select}
      >
        {" "}
        History{" "}
      </button>
      <button
        name="Politics"
        className={`category${props.politics ? "chosen" : ""}`}
        onClick={props.select}
      >
        {" "}
        Politics{" "}
      </button>
      <button
        name="Sports"
        className={`category${props.sports ? "chosen" : ""}`}
        onClick={props.select}
      >
        {" "}
        Sports{" "}
      </button>
    </div>
  );
};

export default Categories;
