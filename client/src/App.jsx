// Global Styles
import "./styles/App.css";

// React Imports
import { Route, Routes } from "react-router-dom";

// Components
import Nav from "./Nav.jsx";
import Landing from "./components/home-landing/Landing.jsx";
import Dashboard from "./components/user-dashboard/Dashboard.jsx";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import UserProfilePage from "./components/user-profile/UserProfilePage.jsx";
import TakeQuiz from "./components/take-quiz/TakeQuiz.jsx";
import CreateQuiz from "./components/create-quiz/CreateQuiz.jsx";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/*" element={<Landing />}></Route>
        <Route path="/quiz/:id/*" element={<TakeQuiz />}></Route>
        <Route path="dashboard/*" element={<Dashboard />}></Route>
        <Route path="/login/" element={<Login />}></Route>
        <Route path="/register/" element={<Register />}></Route>
        <Route path="/settings/" element={<UserProfilePage />}></Route>
        <Route path="/createQuiz/" element={<CreateQuiz />}></Route>
      </Routes>
    </>
  );
}

export default App;
