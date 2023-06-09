import { Grid, OutlinedInput, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const FilterBar = (props) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.onFilterChange(name, value.toLowerCase());
  };

  return (
    <Grid
      container
      direction='row'
      spacing={1}
      justifyContent='flex-end'
      alignItems='center'
    >
      <OutlinedInput
        size='small'
        placeholder='Search quiz'
        name='name'
        onChange={handleChange}
      />
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="select-label">Categories</InputLabel>
        <Select
          labelId='select-label'
          label='Categories'
          name='category'
          value={props.category}
          onChange={handleChange}
          size='small'
        >
          <MenuItem value=''>All</MenuItem>
          <MenuItem value='art'>Art</MenuItem>
          <MenuItem value='general knowledge'>General Knowledge</MenuItem>
          <MenuItem value='sports'>Sports</MenuItem>
          <MenuItem value='history'>History</MenuItem>
          <MenuItem value='politics'>Politics</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default FilterBar;