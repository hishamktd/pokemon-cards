import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React, { memo } from 'react';

import { AppRadioProps } from './types';

const AppRadio = ({
  row = true,
  radioProps,
  radioList,
  formLabelProps,
  ...rest
}: AppRadioProps) => {
  const { slotProps = {} } = formLabelProps || {};
  const { typography } = slotProps;

  return (
    <RadioGroup row={row} aria-label="controlled" name="controlled" {...rest}>
      {radioList?.map((radio) => (
        <FormControlLabel
          key={radio?.id}
          value={radio?.id}
          label={radio?.name}
          control={<Radio {...radioProps} />}
          slotProps={{
            typography: { fontSize: 14, ...typography },
            ...slotProps,
          }}
          {...formLabelProps}
        />
      ))}
    </RadioGroup>
  );
};

export default memo(AppRadio);
