import  { Tabs, Tab }  from '@mui/material';

const TabsBar = (props) => {

  const handleChange = (event, newValue) => {
    props.setActiveTab(newValue);
  };

  const style = {fontSize: 15, fontWeight: 900};

  return (
    <Tabs variant="fullWidth" value={props.activeTab} onChange={handleChange} >
      <Tab label="Overview" sx={style}/>
      <Tab label="Quizzes" sx={style}/>
      <Tab label="History" sx={style}/>
      <Tab label="Favorites" sx={style}/>
    </Tabs>
  );
};

export default TabsBar;
