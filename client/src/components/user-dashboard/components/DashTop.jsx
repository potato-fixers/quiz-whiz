import { Avatar, Typography, IconButton, Grid } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../global/UserContext';
import { Buffer } from 'buffer';
import useDeviceDetect from '../hooks/useDeviceDetect';

const DashTop = (props) => {

  const { profile, isLoggedIn } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});
  const userId = profile.userId;
  const { isMobile } = useDeviceDetect();

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

  const style = isMobile ?
   { width: 70, height: 70, border: 1, borderColor: 'primary.main', } :
   { width: 120, height: 120, border: 3, borderColor: 'primary.main' };

  return (
    <Grid
    container
    direction='row'
    justifyContent='center'
    columnSpacing={isMobile ? 5 : 10}
    sx={{ mt: 10, mb: 5}}
    >
      <Grid item>
        <Avatar
          src={userInfo.profile_img ? `data:image/jpeg;base64,${Buffer.from(userInfo.profile_img.data).toString('base64')}` : ''}
          sx={style}
        />
      </Grid>
      <Grid item>
        <Typography variant='h3' sx={isMobile ? {} : {fontSize: 70, letterSpacing: 5}}>{profile.username}</Typography >
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

