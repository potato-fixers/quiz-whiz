import axios from 'axios';

export default async function getSession() {
  try {
    var { data } = await axios.get(`${process.env.REACT_APP_API_URL}/auth/session`, {
      withCredentials: true
    });
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};
