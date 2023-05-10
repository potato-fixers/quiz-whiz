import './styles/profile.css';
import UserProfileFieldBox from './UserProfileFieldBox.jsx';


function UserProfilePage() {
  return (
    <div>
      <UserProfileFieldBox field_title={"Profile Picture"} label={"Profile Picture"} initial_value={"pic"} saveRoute={'/settings/updatePic'}/>
      <UserProfileFieldBox field_title={"Username"} label={"Username"} initial_value={"johndoe"} saveRoute={'/settings/updateUsername'}/>
      <UserProfileFieldBox field_title={"Password"} label={"Password"} initial_value={"password"} saveRoute={'/settings/updatePassword'} />
      <UserProfileFieldBox field_title={"Bio"} label={"bio"} initial_value={"Roses are red, violets are blue, I like taking quizzes, how bout you!"} saveRoute={'/settings/updateBio'}/>
    </div>
  );
}

export default UserProfilePage;
