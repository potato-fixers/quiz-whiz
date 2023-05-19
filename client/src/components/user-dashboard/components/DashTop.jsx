import { Avatar, Typography, IconButton, Grid } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../global/UserContext';
import { Buffer } from 'buffer';

const DashTop = (props) => {

  const { profile, isLoggedIn } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});
  const userId = profile.userId;

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

    isLoggedIn && getUserInfo(userId);

  }, [isLoggedIn, userId]);

  return (
    <Grid
    container
    direction='row'
    justifyContent='center'
    columnSpacing={5}
    sx={{ mt: 10, mb: 5}}
    >
      <Grid item>
        <Avatar
          src={userInfo.profile_img ? `data:image/jpeg;base64,${Buffer.from(userInfo.profile_img.data).toString('base64')}` : ''}
          sx={{ width: 75, height: 75 }}
        />
      </Grid>
      <Grid item>
        <Typography variant='h3'>{profile.username}</Typography >
      </Grid>
      <Grid item>
        <IconButton sx={{ width: 40, height: 40 }} >
          <Link to='/settings' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <EditOutlinedIcon color='primary' fontSize='large'/>
          </Link>
        </IconButton >
      </Grid>
    </Grid>
  )
}

export default DashTop;

