import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Typography } from '@mui/material';
import TakeQuiz from './components/take-quiz/TakeQuiz.jsx';
import Dashboard from './components/user-dashboard/Dashboard.jsx';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import CreateQuiz from './components/create-quiz/CreateQuiz.jsx'

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

          <Route path='dashboard/*' element={<Dashboard />}></Route>

          <Route path='/login/' element={<Login />}></Route>
          <Route path='/register/' element={<Register />}></Route>
          <Route path='/createQuiz/' element={<CreateQuiz />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
