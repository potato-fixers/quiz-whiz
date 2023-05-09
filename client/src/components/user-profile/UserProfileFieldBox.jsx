import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import './styles/profile.css';
import axios from 'axios';

const UserProfileFieldBox = (props) => {
  const [editing, setEditing] = useState(false);
  const [field, setField] = useState(props.pic);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleSaveClick = () => {
    axios.put(`http://localhost:8080${props.saveRoute}`, {
    newUsername: 'new_username'
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
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
  setEditing(false);
};

  const handleFieldChange = (event) => {
    setField(event.target.value);
  };

  return (
    <Box className="user-profile-box">
      <h3>{props.field_title}</h3>
      {editing ? (
        <>
          <TextField
            className="input"
            label={props.label}
            variant="outlined"
            value={field}
            onChange={handleFieldChange}
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
          <p>{field}</p>
          <Button className="editButton" variant="contained" onClick={handleEditClick}>
            Edit
          </Button>
        </>
      )}
    </Box>
  );
}


export default UserProfileFieldBox;