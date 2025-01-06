import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FC, memo } from 'react';

import { AppSelectProps } from '.';

const SelectField: FC<AppSelectProps> = ({ variant = 'outlined' }) => {
  return (
    <FormControl variant={variant} sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={null}
        onChange={() => {}}
        label="Age"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default memo(SelectField);
