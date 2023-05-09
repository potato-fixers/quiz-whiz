import { Stack, OutlinedInput, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useState } from 'react';

const FilterBar = () => {

  const [term, setTerm] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    let value = e.target.value;
    setTerm(value);
  };

  const handleSelect = (e) => {
    let value = e.target.value;
    setCategory(value);
  };

  return (
    <Stack direction='row' spacing={1} justifyContent='flex-end'>
      <OutlinedInput size='small' placeholder='Search quiz' value={term} onChange={handleChange}/>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="select-label">Categories</InputLabel>
        <Select
          labelId='select-label'
          label='Categories'
          value={category}
          onChange={handleSelect}
          size='small'
        >
          <MenuItem value='all'>All</MenuItem>
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