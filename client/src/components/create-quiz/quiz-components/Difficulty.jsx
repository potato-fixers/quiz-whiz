import "../styles/create-quiz.css";


const Difficulty = (props) => {
  return (
    <div className="Diffictuly">
       <h1> Choose Your Difficutly </h1>
      <button
        name="easy"
        className={`category${props.easyDiff ? "chosen" : ""}`}
        onClick={props.select}
      >
        {" "}
        Easy{" "}
      </button>
      <button
        name="medium"
        className={`category${props.mediumDiff ? "chosen" : ""}`}
        onClick={props.select}
      >
        {" "}
        Medium{" "}
      </button>
      <button
        name="hard"
        className={`category${props.hardDiff? "chosen" : ""}`}
        onClick={props.select}
      >
        {" "}
        Hard{" "}
      </button>
    </div>
  );
};

export default Difficulty;