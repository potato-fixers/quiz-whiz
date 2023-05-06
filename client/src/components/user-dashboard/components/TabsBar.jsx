import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TabsBar = (props) => {

  const handleChange = (event, newValue) => {
    props.setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: 'auto', bgcolor: 'background.paper' }}>
      <Tabs value={props.activeTab} onChange={handleChange} >
        <Tab label="Overview" />
        <Tab label="My Quizzes" />
        <Tab label="History" />
        <Tab label="Favorites" />
      </Tabs>
    </Box>
  );
};

export default TabsBar;