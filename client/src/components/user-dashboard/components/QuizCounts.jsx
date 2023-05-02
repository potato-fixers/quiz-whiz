

const QuizCounts = (props) => {

  switch (props.activeTab) {
    case 1:
      return <div>Total Quizzes</div>;
    case 2:
      return <div>Total Plays</div>;
    case 3:
      return <div>Total Favorites</div>;
    default:
      return (
        <>
          <div>Total Quizzes</div>
          <div>Total Plays</div>
          <div>Total Favorites</div>
        </>
      );
  }

};

export default QuizCounts;