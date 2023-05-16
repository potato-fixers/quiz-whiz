import getSession from '../utils/getSession.js';
import { UserContext } from '../../global/UserContext';
import { useContext } from 'react';


export default function useSession() {
  const { setUser, setProfile, setIsLoggedIn } = useContext(UserContext);

  const updateSession = async () => {
    try {
      var data = await getSession();
      if (!!data.userId) {
        setProfile(data);
        setUser(data.username);
        setIsLoggedIn(true);
      }
    } catch (err) {
      return Promise.reject('session timed out attempt')
    }
  }

  return {
    updateSession
  }
};