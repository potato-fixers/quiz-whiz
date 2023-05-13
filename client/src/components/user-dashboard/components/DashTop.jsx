import { Avatar, Typography, IconButton, Stack } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from '../../global/UserContext';

const DashTop = (props) => {

  const { user } = useContext(UserContext);

  return (
    <Stack direction='row' spacing={3} sx={{ mt: 5, mb: 3, alignItems: 'center'} }>
      <Avatar sx={{ width: 100, height: 100 }} />
      <Typography variant='h2'>{user}</Typography >
      <IconButton size='small' sx={{ width: 50, height: 50 }} >
        <Link to='/settings' style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <EditOutlinedIcon />
        </Link>
      </IconButton >
    </Stack >
  )
}

export default DashTop;