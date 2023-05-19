import './styles/dashboard.css';
import { Grid, Container } from '@mui/material';
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
  const { profile, isLoggedIn } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const userId = profile.userId;

  useEffect(() => {
    navigate(tabs[activeTab]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  useEffect(() => {
    isLoggedIn && getCounts(userId);
  }, [userId, isLoggedIn]);

  return (
    <Container maxWidth={false}>
      <Grid item xs={12}>
        <DashTop />
      </Grid>
      <Grid item xs={12}>
        <TabsBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </Grid>
      <Grid item xs={12}>
        <QuizCounts activeTab={activeTab}/>
      </Grid>
      <Grid item xs={12}>
        <TabPanel activeTab={activeTab} />
      </Grid>
    </Container>
  );
};

export default Dashboard;