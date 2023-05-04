import "./styles/App.css";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Nav from "./Nav.jsx";
import TakeQuiz from "./components/take-quiz/TakeQuiz.jsx";
import Dashboard from "./components/user-dashboard/Dashboard.jsx";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/*"
          element={
            <div className="body">
              <Typography variant="h4">Welcome to Quiz Whiz</Typography>
              {/* Using this for Take Quiz Development. Please leave here for now  */}
              {/* <Link to="/quiz/1/start">Take Quiz</Link>
                  <Link to="/quiz/1/question">Quiz Question</Link>
                  <Link to="/quiz/1/summary">Quiz Summary</Link> */}
            </div>
          }
        ></Route>

        <Route path="/quiz/:id/*" element={<TakeQuiz />}></Route>

        <Route path="dashboard/*" element={<Dashboard />}></Route>

        <Route path="/login/" element={<Login />}></Route>
        <Route path="/register/" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
