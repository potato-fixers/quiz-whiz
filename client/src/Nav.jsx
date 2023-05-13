import { AppBar, Typography, Toolbar, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './components/global/UserContext';
import { Avatar } from '@mui/material';

const Nav = () => {

  const { isLoggedIn } = useContext(UserContext);
  const styles = { color: 'inherit', textDecoration: 'inherit' };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant="h4" >
          <Link to='/' style={styles}>
            Quiz Whiz
           </Link>
        </Typography>

        <Typography variant='h6' >
          <Link to='/dashboard' style={styles}>Dashboard</Link>
        </Typography>

        <Typography variant='h6' sx={{ flexGrow: 1 }} >
          <Link to='/createQuiz' style={styles}>Create</Link>
        </Typography>

        { isLoggedIn ?
          <Avatar /> :
          <>
            <Button color='inherit' >
              <Link to='/register' style={styles}>Sign Up</Link>
            </Button>
            <Button color='inherit' >
              <Link to='/login' style={styles}>Sign In</Link>
            </Button>
          </>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
