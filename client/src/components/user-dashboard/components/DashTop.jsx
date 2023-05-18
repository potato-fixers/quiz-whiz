import { Avatar, Typography, IconButton, Stack } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../global/UserContext';
import { Buffer } from 'buffer';

const DashTop = (props) => {

  const { profile } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async (userId) => {

    const url = process.env.REACT_APP_API_URI;

    try {
      const response = await fetch(`${url}/settings/user?id=${userId}`);
      if (response.ok) {
        const data = await response.json();
        setUserInfo(data[0]);
      }
    } catch (err) {
      console.error(err.stack);
      alert('Something went wrong');
    }
  }

  useEffect(() => {
    getUserInfo(profile.userId);
  }, []);

  const profileImg = userInfo.profile_img ? `data:image/jpeg;base64,${Buffer.from(userInfo.profile_img.data).toString('base64')}` : '';

  return (
    <Stack direction='row' spacing={3} sx={{ mt: 5, mb: 3, alignItems: 'center'} }>
      <Avatar src={profileImg} sx={{ width: 100, height: 100 }} />
      <Typography variant='h2'>{profile.username}</Typography >
      <IconButton size='small' sx={{ width: 50, height: 50 }} >
        <Link to='/settings' style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <EditOutlinedIcon />
        </Link>
      </IconButton >
    </Stack >
  )
}

export default DashTop;

