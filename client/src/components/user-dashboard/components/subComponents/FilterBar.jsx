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
          onChange={handleChange}
          size='small'
        >
          <MenuItem value=''>All</MenuItem>
          <MenuItem value={'education'}>Education</MenuItem>
          <MenuItem value={'music'}>Music</MenuItem>
          <MenuItem value={'sport'}>Sport</MenuItem>
          <MenuItem value={'movie'}>Movie</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}

export default FilterBar;