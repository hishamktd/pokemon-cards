import { Paper, Tooltip } from '@mui/material';
import React, { FC, memo } from 'react';

type Props = {
  color?: string;
};

const ColorChip: FC<Props> = ({ color }) => {
  if (!color) return <>-</>;
  return (
    <Tooltip title={color}>
      <Paper sx={{ width: 24, height: 24, backgroundColor: color }}></Paper>
    </Tooltip>
  );
};

export default memo(ColorChip);
