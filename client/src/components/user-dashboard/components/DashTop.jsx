import { Avatar, Typography, Button, Stack } from '@mui/material';

const DashTop = (props) => {

  const handleClick = (e) => {
    // handle clicking on edit profile
    console.log('Edited')
  };

  return (
    <Stack direction='row'>
      <Avatar />
      <Typography variant='h2'>Username</Typography>
      <Button variant='outlined' onClick={handleClick}>Edit profile</Button>
    </Stack>
  )
}

export default DashTop;