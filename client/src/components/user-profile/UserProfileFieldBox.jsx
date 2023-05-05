import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import './styles/profile.css';

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