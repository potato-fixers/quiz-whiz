import { Stack } from '@mui/material';
import { useState } from 'react';
import Input from '@mui/joy/Input';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const FilterBar = (props) => {

  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    let value = e.target.value;
    setTerm(value);
  };

  return (
    <Stack direction='row' spacing={1}>
      <Input size='sm' placeholder='Search by quiz name' value={term} onChange={handleChange} />
      <Select
        size='sm'
        placeholder='Categories'
        indicator={<KeyboardArrowDown />}
        sx={{
          width: 105,
          [`& .${selectClasses.indicator}`]: {
            transition: '0.2s',
            [`&.${selectClasses.expanded}`]: {
              transform: 'rotate(-180deg)',
            },
          },
        }}
      >
      <Option value='all'>All</Option>
      <Option value='edu'>Edu</Option>
      <Option value='music'>Music</Option>
      <Option value='movie'>Movie</Option>
      <Option value='sport'>Sport</Option>
    </Select>
    </Stack>
  )
}

export default FilterBar;