import useInput from './hooks/useInput.jsx';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"


export default function RegisterForm() {
  const firstName = useInput('');
  const lastName = useInput('');
  const email = useInput('');
  const password = useInput('');
  const confirmPassword = useInput('');
  const username = useInput('');
  const bio = useInput('');
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`,
        {
          first_name: firstName.value,
          last_name: lastName.value,
          email: email.value,
          password: password.value,
          username: username.value,
          bio: bio.value,
          profile_img: profileImage
        }
      );
      navigate('/signin');
    } catch (error) {
      alert('Uh oh, we have trouble processing your request, please try again later');
      //to remove at produciton
      console.log(error);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setProfileImage(e.target.result);
    }

    reader.readAsDataURL(file);
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
            minilength={6}
            maxLength={20}
            pattern="(?=.*\d).{8,}"
            id="password"
            title="Must contain at least one number and be between 8-20 characters long."
            {...password}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            pattern={`^${password.value}$`}
            id="confirmPassword"
            title="Error: Passwords do not match."
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
          {profileImage && <img src={profileImage} style={{ width: '100px', height: '100px' }} alt="upload profile" />}
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
