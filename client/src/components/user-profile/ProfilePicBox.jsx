import React, { useState } from 'react';
import './styles/profile.css';
import { Button, TextField, Avatar } from '@mui/material';
import axios from 'axios';




const ProfilePicBox = (props) => {
  const userid = 1;

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = (event) => {
    event.preventDefault();
    console.log(selectedFile);
    const formData = new FormData();
    formData.append("image", selectedFile);
    axios.put(`${process.env.REACT_APP_API_URI}${props.saveRoute}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      params: {
        id: userid
      }
    })
    .then(res => {
      if (res.status === 200) {
        console.log('Photo updated successfully!');
      } else {
        console.error('Failed to update photo.');
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <>
    { props.img ? (

      <img className="user-profile-image" src={props.img} alt="User profile" />
    ) : <> </>}
      <input type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUploadClick}>
        Upload
      </Button>
    </>
  );
}


export default ProfilePicBox;