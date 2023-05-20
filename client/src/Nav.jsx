import './styles/Nav.css';
import { AppBar, Typography, Toolbar, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import { UserContext } from './components/global/UserContext';
import { useContext } from 'react';
import handleSignOutClick from './components/user-auth/utils/handleSignOut.js';
import useSession from './components/user-auth/hooks/useSession';
import { useLayoutEffect, useState } from 'react';

const Nav = () => {

  const { isLoggedIn } = useContext(UserContext);
  const { updateSession } = useSession();
  const [isReady, setIsReady] = useState(false);

  const loggedInStyle = !isLoggedIn ? {flexGrow: 1} : {};

  useLayoutEffect(() => {
    let fetch = async () => {
      try {
        await updateSession();
        setIsReady(true);
      } catch (err) {
        console.log(err);
        setIsReady(true);
      }
    }
    fetch();
    // eslint-disable-next-line
  }, [])

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant="h4" sx={loggedInStyle}>
          <Link to='/' className='nav-link'>
            Quiz Whiz
          </Link>
        </Typography>

        {(isReady && !isLoggedIn) ? <></> :
          <>
            <Typography variant='h6'>
              <Link to='/dashboard' className='nav-link nav-title'>Dashboard</Link>
            </Typography>
            <Typography variant='h6' className='flex-grow'>
              <Link to='/createQuiz' className='nav-link nav-title'>Create</Link>
            </Typography>
          </>
        }
        {!isReady ? <></> : !isLoggedIn ?
          <>
            <Button color='inherit' >
              <Link to='/register' className='nav-link'>Sign Up</Link>
            </Button>
            <Button color='inherit' >
              <Link to='/login' className='nav-link'>Sign In</Link>
            </Button>
          </>
          :
          <Button color='inherit' onClick={handleSignOutClick}>
            Sign Out
          </Button>}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
