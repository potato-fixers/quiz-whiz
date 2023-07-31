import axios from 'axios';

export default async function getSession() {
  try {
    var { data } = await axios.get(`${import.meta.env.VITE_APP_API_URI}/auth/session`, {
      withCredentials: true
    });
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};
