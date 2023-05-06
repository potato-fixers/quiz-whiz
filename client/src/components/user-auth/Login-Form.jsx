import useInput from './hooks/useInput.jsx';
import React, { useContext } from 'react';
import { UserContext } from '../global/UserContext';

export default function LoginForm() {
  const username = useInput('');
  const password = useInput('');
  // const { user } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    console.log(username.value, password.value)
  }

  return (
    <>
      <h2> login form </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" {...username} />
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