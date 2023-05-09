import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import './styles/profile.css';

const ProfilePicBox = (props) => {
  const [editing, setEditing] = useState(false);
  const [profilePic, setProfilePic] = useState('pic');

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  const handleUsernameChange = (event) => {
    setProfilePic(event.target.value);
  };

  return (
    <Box className="username-box">
      <h3>Profile Picture</h3>
      {editing ? (
        <>
          <TextField
            className="usernameInput"
            label="Username"
            variant="outlined"
            value={profilePic}
            onChange={handleUsernameChange}
          />
          <div className="cancelSaveButtons">
            <Button variant="contained" onClick={handleCancelClick}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSaveClick}>
              Save
            </Button>
          </div>
        </>
      ) : (
        <>
          <p>{profilePic}</p>
          <Button className="editButton" variant="contained" onClick={handleEditClick}>
            Edit
          </Button>
        </>
      )}
    </Box>
  );
}


export default ProfilePicBox;