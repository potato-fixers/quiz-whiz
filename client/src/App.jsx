// Global Styles
import "./styles/App.css";

// React Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Nav from "./Nav.jsx";
import Landing from "./components/home-landing/Landing.jsx";
import Dashboard from "./components/user-dashboard/Dashboard.jsx";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import UserProfilePage from "./components/user-profile/UserProfilePage.jsx";
import TakeQuiz from "./components/take-quiz/TakeQuiz.jsx";
import CreateQuiz from "./components/create-quiz/CreateQuiz.jsx";

import { QuizProvider } from "./components/take-quiz/context/QuizContext";
import { useState, useLayoutEffect } from 'react';
import useSession from './components/user-auth/hooks/useSession';
import { UserContext } from './components/global/UserContext';
import { useContext } from 'react';

function App() {
  const { isLoggedIn } = useContext(UserContext);
  const [isReady, setIsReady] = useState(false);
  const { updateSession } = useSession();

  useLayoutEffect(() => {
    let fetch = async () => {
      try {
        await updateSession();
        setIsReady(true);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/*" element={<Landing />}></Route>
        <Route path="/login/" element={<Login />}></Route>
        <Route path="/register/" element={<Register />}></Route>
        {isReady && !isLoggedIn ? <></> :
          <>
            <Route path="/settings/" element={<UserProfilePage />}></Route>
            <Route path="dashboard/*" element={<Dashboard />}></Route>
            <Route path="/createQuiz/" element={<CreateQuiz />}></Route>
          </>
        }
        <Route
          path="/quiz/:id/*"
          element={
            <QuizProvider>
              <TakeQuiz />
            </QuizProvider>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
