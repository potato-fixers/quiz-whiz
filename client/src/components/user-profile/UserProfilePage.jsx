import './styles/profile.css';
import UsernameBox from './UsernameBox.jsx';
import PasswordBox from './PasswordBox.jsx';
import ProfilePicBox from './ProfilePicBox.jsx';
import BioBox from './BioBox.jsx';
import UserProfileFieldBox from './UserProfileFieldBox.jsx';


function UserProfilePage() {
  return (
    <div>
      <UserProfileFieldBox field_title={"Profile Picture"} label={"profile-picture"} initial_value={"pic"} />
      <UserProfileFieldBox field_title={"Username"} label={"username"} initial_value={"johndoe"} />
      <UserProfileFieldBox field_title={"Password"} label={"password"} initial_value={"password"} />
      <UserProfileFieldBox field_title={"Bio"} label={"bio"} initial_value={"Roses are red, violets are blue, I like taking quizzes, how bout you!"} />
    </div>
  );
}

export default UserProfilePage;
