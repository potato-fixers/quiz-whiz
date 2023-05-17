import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useContext } from 'react';
import { UserContext } from '../../../global/UserContext';

const LikeIcon = ({liked, quizId, getQuizzes}) => {

  const { profile } = useContext(UserContext);

  const likeQuiz = async (userId, quizId) => {

    const url = process.env.REACT_APP_API_URI;
    const opt = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: userId,
        quizId: quizId
      })
    };

    try {
      console.log(opt)
      const response = await fetch(`${url}/dashboard/favorites`, opt);
      if (response.ok) {
        getQuizzes(profile.userId);
      }
    } catch (err) {
      console.error(err.stack);
      alert('Something went wrong');
    }
  };


  if (liked) {
    return <FavoriteIcon > </FavoriteIcon>;
  }
  return <FavoriteBorderIcon onClick={() => likeQuiz(profile.userId, quizId)}> </FavoriteBorderIcon>;

}

export default LikeIcon;