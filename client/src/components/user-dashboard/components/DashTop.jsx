import { Avatar, Typography, IconButton, Grid } from '@mui/material';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const profileImg = userInfo.profile_img ? `data:image/jpeg;base64,${Buffer.from(userInfo.profile_img.data).toString('base64')}` : '';

  return (
    <Grid
    container
    direction='row'
    justifyContent='center'
    columnSpacing={5}
    sx={{ mt: 4, mb: 2}}
    >
      <Grid item>
        <Avatar src={profileImg} sx={{ width: 75, height: 75 }} />
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

