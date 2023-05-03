import { Avatar, Typography, Button, Stack } from '@mui/material';

const DashTop = (props) => {

  return (
    <Stack direction='row'>
      <Avatar />
      <Typography variant='h2'>Username</Typography>
      <Button variant='outlined'>Edit profile</Button>
    </Stack>
  )
}

export default DashTop;