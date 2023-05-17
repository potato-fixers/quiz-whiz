import { Box, Button, TextField } from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import './styles/profile.css';
import ProfilePicBox from './ProfilePicBox.jsx';
import axios from 'axios';
import { UserContext } from '../../components/global/UserContext';


const UserProfileFieldBox = (props) => {
  // TODO: Update this with the logged in userid.
  // const userid = 1;
  const { profile } = useContext(UserContext);
  const loggedInUserId = profile.userId;


  const [editing, setEditing] = useState(false);
  const [field, setField] = useState(props.initial_value ? props.initial_value : props.default_value);
  const [oldPassword, setOldPassword] = useState('Enter current password');

  useEffect(() => {
    if (props.initial_value) {
      setField(props.initial_value);
    }
  }, [props.initial_value]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleSaveClick = () => {
    // TODO: if it's the password field, need to check password first before updating
    axios.put(`${process.env.REACT_APP_API_URI}${props.saveRoute}`, {
    updatedField: field
  }, {
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      id: loggedInUserId
    }
  })
  .then(res => {
    if (res.status === 200) {
      console.log(`${props.field_title} updated successfully!`);
    } else {
      console.error(`Failed to update ${props.field_title}.`);
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

  const handleCurrentPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  return (
    <Box className="user-profile-box">
      <h3>{props.field_title}</h3>
      { editing ? (
        <>
          {props.field_title === "Password" ? (
            <TextField
              className="input"
              label="Current password"
              variant="outlined"
              value={oldPassword}
              onChange={handleCurrentPasswordChange}
            />
          ) : null }

          {props.field_title === "Profile Picture" ? (
            <ProfilePicBox saveRoute={props.saveRoute} img={field}/>
          ) : (
            <TextField
              className="input"
              label={props.label}
              variant="outlined"
              value={field}
              onChange={handleFieldChange}
            />
          )}

          <div className="cancelSaveButtons">
            <Button variant="contained" onClick={handleCancelClick}>
              Cancel
            </Button>
            { props.field_title === "Profile Picture" ? (
              <></>
            ) : (
              <Button variant="contained" color="primary" onClick={handleSaveClick}>
                Save
              </Button>
            )}
          </div>
        </>
      ) : (
        <>
        {props.field_title === "Profile Picture" ? (
          field ? (
            <p>
            <img className="user-profile-image" src={field} alt="User profile" />
            </p>
          ) : null
        ) : (
          <p>{field}</p>
        )}
        <Button className="editButton" variant="contained" onClick={handleEditClick}>
          Edit
        </Button>
      </>
      )}
    </Box>
  );
}


export default UserProfileFieldBox;