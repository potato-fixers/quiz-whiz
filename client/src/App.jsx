// React Imports
import { useState, useLayoutEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Global Styles
import "./styles/App.css";

// Components
import Nav from "./Nav.jsx";
import Landing from "./components/home-landing/Landing.jsx";
import Dashboard from "./components/user-dashboard/Dashboard.jsx";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import UserProfilePage from "./components/user-profile/UserProfilePage.jsx";
import TakeQuiz from "./components/take-quiz/TakeQuiz.jsx";
import CreateQuiz from "./components/create-quiz/CreateQuiz.jsx";

// Hooks
import useSession from './components/user-auth/hooks/useSession';

// Context
import { QuizProvider } from "./components/take-quiz/context/QuizContext";
import { UserContext } from './components/global/UserContext';

function App() {
  const { isLoggedIn } = useContext(UserContext);
  const [isReady, setIsReady] = useState(false);
  const { updateSession } = useSession();

  useLayoutEffect(() => {
    if (localStorage.getItem('quizSaved') === 'true') {
      localStorage.clear();
    }

    let fetch = async () => {
      try {
        await updateSession();
        setIsReady(true);
      } catch (err) {
        setIsReady(true);
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
