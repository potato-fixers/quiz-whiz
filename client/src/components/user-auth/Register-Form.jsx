import useInput from './hooks/useInput.jsx';
import React, { useState } from 'react';


export default function RegisterForm() {
  const firstName = useInput('');
  const lastName = useInput('');
  const email = useInput('');
  const password = useInput('');
  const confirmPassword = useInput('');
  const username = useInput('');
  const bio = useInput('');
  // const [profileImage, setProfileImage] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleFileChange = (event) => {
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            {...firstName}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            {...lastName}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...email}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...password}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            {...confirmPassword}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            {...username}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            {...bio}
            maxLength={250}
          />
        </div>
        <div>
          <label htmlFor="profileImage">Profile Image:</label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
