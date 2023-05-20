import './styles/dashboard.css';
import { Container } from '@mui/material';
import DashTop from './components/DashTop.jsx';
import TabsBar from './components/TabsBar.jsx';
import QuizCounts from './components/QuizCounts.jsx';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TabPanel from './components/TabPanel.jsx';
import { CountsContext } from './context/CountsContext';
import { UserContext } from '../global/UserContext';

const Dashboard = (props) => {

  const tabs = ['', 'quizzes', 'history', 'favorites']; // Overview is default dashboard

  const { getCounts } = useContext(CountsContext);
  const { profile } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(tabs[activeTab]);
    getCounts(profile.userId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  return (
    <Container maxWidth='xl'>
      <DashTop />
      <TabsBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <QuizCounts activeTab={activeTab}/>
      <TabPanel activeTab={activeTab} />
    </Container>
  );
};

export default Dashboard;