import  { Box, Tabs, Tab }  from '@mui/material';

const TabsBar = (props) => {

  const handleChange = (event, newValue) => {
    props.setActiveTab(newValue);
  };

  return (
    <Tabs variant="fullWidth" flexWrap="wrap" value={props.activeTab} onChange={handleChange} >
      <Tab label="Overview" />
      <Tab label="My Quizzes" />
      <Tab label="History" />
      <Tab label="Favorites" />
    </Tabs>
  );
};

export default TabsBar;
