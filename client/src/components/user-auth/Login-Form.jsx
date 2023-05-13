import useInput from './hooks/useInput.jsx';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../global/UserContext';
import { useContext } from 'react';

export default function LoginForm() {
  const navigate = useNavigate();
  const email = useInput('');
  const password = useInput('');
  const { login, user } = useContext(UserContext);


  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    try {
      var { data }= await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
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

  console.log('already logged in as', user);

  return (
    <>
      <h2> login form </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" {...email} />
        </label>
        <label>
          Password:
          <input type="password" {...password} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}