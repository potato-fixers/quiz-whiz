import Overview from './Overview.jsx';
import MyQuizzes from './MyQuizzes.jsx';
import History from './History.jsx';
import Favorites from './Favorites.jsx';

const TabPanel = (props) => {

  switch (props.activeTab) {
    case 1:
      return <MyQuizzes />;
    case 2:
      return <History />;
    case 3:
      return <Favorites />;
    default:
      return <Overview />;
  }
};

export default TabPanel;