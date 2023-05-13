import "./styles/App.css";
import { Route, Routes } from "react-router-dom";

import Nav from "./Nav.jsx";
import Landing from "./components/home-landing/Landing.jsx";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import UserProfilePage from "./components/user-profile/UserProfilePage.jsx";
import Dashboard from "./components/user-dashboard/Dashboard.jsx";
import TakeQuiz from "./components/take-quiz/TakeQuiz.jsx";
import CreateQuiz from "./components/create-quiz/CreateQuiz.jsx";

import { QuizProvider } from "./components/take-quiz/context/QuizContext";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/*" element={<Landing />}></Route>

        <Route path="/login/" element={<Login />}></Route>
        <Route path="/register/" element={<Register />}></Route>
        <Route path="/settings/" element={<UserProfilePage />}></Route>
        <Route path="dashboard/*" element={<Dashboard />}></Route
        <Route
          path="/quiz/:id/*"
          element={
            <QuizProvider>
              <TakeQuiz />
            </QuizProvider>
          }
        ></Route>
        <Route path="/createQuiz/" element={<CreateQuiz />}></Route>
      </Routes>
    </>
  );
}

export default App;
