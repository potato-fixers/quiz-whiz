import useInput from './hooks/useInput.jsx';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Typography, Button } from '@mui/material';
import "./styles/register.css";


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
      await axios.post(`${process.env.REACT_APP_API_URI}/auth/register`,
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
      navigate('/login');
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
      <form id='register' onSubmit={handleSubmit}>
        <Typography variant="h2">
          Welcome New User
        </Typography>
        <div>
          <Typography variant="subtitle1" component="label" className="label" htmlFor="firstName">
            First Name:
          </Typography>
          <input
            type="text"
            id="firstName"
            {...firstName}
            required={true}
          />
        </div>
        <div>
          <Typography variant="subtitle1" component="label" htmlFor="lastName" className="label">
            Last Name:
          </Typography>
          <input
            type="text"
            id="lastName"
            {...lastName}
            required={true}
          />
        </div>
        <div>
          <Typography variant="subtitle1" component="label" htmlFor="email" className="label">
            Email:
          </Typography>
          <input
            type="email"
            id="email"
            {...email}
            required={true}
          />
        </div>
        <div>
          <Typography variant="subtitle1" component="label" htmlFor="password" className="label">
            Password:
          </Typography>
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
          <Typography variant="subtitle1" component="label" htmlFor="confirmPassword" className="label">
            Confirm Password:
          </Typography>
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
          <Typography variant="subtitle1" component="label" htmlFor="username" className="label">
            Username:
          </Typography>
          <input
            id="username"
            {...username}
          />
        </div>
        <div>
          <Typography variant="subtitle1" component="label" htmlFor="bio" className="label">
            Bio:
          </Typography>
          <textarea
            id="bio"
            {...bio}
            maxLength={250}
          />
        </div>
        <div>
          <Typography variant="subtitle1" component="label" htmlFor="profileImage" className="label">
            Profile Image:
          </Typography>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleFileChange}
          />
          {profileImage && <img src={profileImage} style={{ width: '100px', height: '100px' }} alt="upload profile" />}
        </div>
        <Button type="submit" variant="contained" color="primary">Register</Button>
      </form>
    </>
  );
}
