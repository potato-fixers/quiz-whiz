import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TabsBar = (props) => {

  const handleChange = (event, newValue) => {
    props.setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={props.activeTab} onChange={handleChange} >
        <Tab label="Overview" />
        <Tab label="My Quizzes" />
        <Tab label="Plays" />
        <Tab label="Favorites" />
      </Tabs>
    </Box>
  );
};

export default TabsBar;