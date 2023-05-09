import './styles/dashboard.css';
import { Container } from '@mui/material';
import DashTop from './components/DashTop.jsx';
import TabsBar from './components/TabsBar.jsx';
import QuizCounts from './components/QuizCounts.jsx';
import Overview from './components/Overview.jsx';
import MyQuizzes from './components/MyQuizzes.jsx';
import History from './components/History.jsx';
import Favorites from './components/Favorites.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {

  const tabs = ['', 'my-quizzes', 'history', 'favorites']; // Overview is default dashboard

  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const TabPanel = () => {
    switch (activeTab) {
      case 0:
        return <Overview />;
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

  useEffect(() => {
    navigate(tabs[activeTab]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  return (
    <Container maxWidth='lg'>
      <DashTop />
      <TabsBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <QuizCounts activeTab={activeTab} />
      <TabPanel />
    </Container>
  );
};

export default Dashboard;