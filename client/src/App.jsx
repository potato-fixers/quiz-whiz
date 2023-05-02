import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Typography } from '@mui/material';
import TakeQuiz from './components/take-quiz/TakeQuiz.jsx';
import Dashboard from './components/user-dashboard/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/*' element={
            <div className='body'>
                <Typography variant="h4">Welcome to Quiz Whiz</Typography>
            </div>
          }>
          </Route>

          <Route path='/quiz/:id/*' element={<TakeQuiz />}></Route>

          <Route path='dashboard/*' element={<Dashboard />}>
            <Route path=':tab' element={<Dashboard />}></Route>
          </Route>

        </Routes>
    </Router>
  );
}

export default App;
