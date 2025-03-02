import { Box, Chip, Theme } from '@mui/material';
import React, { FC, memo } from 'react';

import Image from 'next/image';

import { Nullable } from '@/types';

type Props = {
  icon?: Nullable<string>;
  text?: Nullable<string>;
  color?: Nullable<string>;
};

const getBoxStyle = () => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

const getChipStyle = (t: Theme, color: string) => ({
  color: color,
  backgroundColor: t.palette.common.white,
  border: `1px solid ${color}`,
});

const IconTextChip: FC<Props> = ({ text, icon, color }) => {
  if (!icon || !text || !color) return <>-</>;

  return (
    <Box sx={getBoxStyle}>
      <Chip
        icon={<Image src={icon} alt="" width={20} height={20} />}
        label={text}
        sx={(t) => getChipStyle(t, color)}
      />
    </Box>
  );
};

export default memo(IconTextChip);
