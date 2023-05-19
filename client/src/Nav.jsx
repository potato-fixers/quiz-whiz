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

  const styles = { color: 'inherit', textDecoration: 'inherit', fontWeight: 'bold' };
  const margin = {mr: 2, ml: 2};
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
          <Link to='/' style={styles}>
            Quiz Whiz
          </Link>
        </Typography>

        {(isReady && !isLoggedIn) ? <></> :
          <>
            <Typography variant='h6' sx={margin}>
              <Link to='/dashboard' style={{...styles, fontSize: 15}}>Dashboard</Link>
            </Typography>
            <Typography variant='h6' sx={{...margin, flexGrow: 1 }} >
              <Link to='/createQuiz' style={{...styles, fontSize: 15}}>Create</Link>
            </Typography>
          </>
        }
        {!isReady ? <></> : !isLoggedIn ?
          <>
            <Button color='inherit' >
              <Link to='/register' style={styles}>Sign Up</Link>
            </Button>
            <Button color='inherit' >
              <Link to='/login' style={styles}>Sign In</Link>
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
