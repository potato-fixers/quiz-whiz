import { Stack, OutlinedInput, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const FilterBar = (props) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.onFilterChange(name, value.toLowerCase());
  };

  return (
    <Stack direction='row' spacing={1} justifyContent='flex-end'>
      <OutlinedInput size='small' placeholder='Search quiz' name='name' onChange={handleChange}/>
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
          <MenuItem value='Art'>Art</MenuItem>
          <MenuItem value='General Knowledge'>General Knowledge</MenuItem>
          <MenuItem value='Sports'>Sports</MenuItem>
          <MenuItem value='History'>History</MenuItem>
          <MenuItem value='Politics'>Politics</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}

export default FilterBar;