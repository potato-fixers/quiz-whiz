import getSession from '../utils/getSession.js';
import { UserContext } from '../../global/UserContext';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export default function useSession() {
  const { setUser, setProfile, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const updateSession = async () => {
    try {
      var data = await getSession();
      if (!!data.userId) {
        setProfile(data);
        setUser(data.username);
        setIsLoggedIn(true);
        if (location.pathname === '/register' || location.pathname === '/login') {
          navigate('/dashboard');
        }
      }
    } catch (err) {
      return Promise.reject('session timed out attempt')
    }
  }

  return {
    updateSession
  }
};