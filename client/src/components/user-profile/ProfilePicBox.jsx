import React, { useState } from 'react';
import './styles/profile.css';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

const ProfilePicBox = (props) => {
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
    })
    .then(res => {
      if (res.status === 200) {
        console.log('Username updated successfully!');
      } else {
        console.error('Failed to update username.');
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <>
      <input type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUploadClick}>
        Upload
      </Button>
    </>
  );
}


export default ProfilePicBox;