import React, { useState, useEffect } from 'react';
import './styles/profile.css';
import UserProfileFieldBox from './UserProfileFieldBox.jsx';
import axios from 'axios';
import { Buffer } from 'buffer';


function UserProfilePage() {
  const [userData, setUserData] = useState({});

  const userid = 1;

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URI}/settings/user`,{
      params: {
        id: userid
      }
    })
    .then(response => {
      console.log(response.data);
      setUserData(response.data[0]);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
  }, [userid]);

  return (
    <div>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>

      <UserProfileFieldBox field_title={"Profile Picture"} label={"Profile Picture"} default_value={"Upload a pic!"} initial_value_pic={userData.profile_img ? `data:image/jpeg;base64,${Buffer.from(userData.profile_img.data).toString('base64')}` : ""} saveRoute={'/settings/updatePic'}/>
      <UserProfileFieldBox field_title={"Username"} label={"Username"} default_value={"Choose a username"} initial_value={userData.username} secondary_value={userData.email} saveRoute={'/settings/updateUsername'}/>
      <UserProfileFieldBox field_title={"Password"} label={"Password"} default_value={"********"} initial_value={userData.password} saveRoute={'/settings/updatePassword'} />
      <UserProfileFieldBox field_title={"Bio"} label={"bio"} default_value={"Roses are red, violets are blue, I like taking quizzes, how bout you!"} initial_value={userData.bio} saveRoute={'/settings/updateBio'}/>
    </div>
  );
}

export default UserProfilePage;
