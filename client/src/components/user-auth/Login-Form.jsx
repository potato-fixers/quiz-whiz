import useInput from './hooks/useInput.jsx';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../global/UserContext';
import { useContext } from 'react';
import { Typography, Button } from '@mui/material';
import "./styles/login.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const email = useInput('');
  const password = useInput('');
  const { login } = useContext(UserContext);


  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    try {
      var { data } = await axios.post(`${process.env.REACT_APP_API_URI}/auth/login`, {
        email: email.value,
        password: password.value,
      }, {
        withCredentials: true
      });
      login(data);
      navigate('/dashboard');
    } catch (err) {
      alert('Incorrect username and password, please try again!')
      //to remove at production;
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="h2" component="h2">
          Welcome Back :D
        </Typography>
        <div>
          <Typography htmlFor="email" variant="body1" component="label" className="label">
            Email:
          </Typography>
          <input type="text" id="email" {...email} />
        </div>
        <div>
          <Typography htmlFor="password" variant="body1" component="label" className="label">
            Password:
          </Typography>
          <input type="password" id="password" {...password} />
        </div>
        <Button type="submit" variant="contained" color="primary" id="button">
          Submit
        </Button>
      </form>
    </>
  )
}