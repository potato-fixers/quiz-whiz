import axios from 'axios';

export default function handleSignOutClick() {

  axios.get(`${import.meta.env.VITE_APP_API_URI}/auth/signout`, {withCredentials: true})
  .then((res) => {
    window.location.href = '/login';
  })

}