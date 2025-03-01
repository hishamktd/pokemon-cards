import { Box, Paper, Tooltip } from '@mui/material';
import React, { FC, memo, useState } from 'react';

import Image from 'next/image';

import { isValidUrl } from '@/utils/common';

type Props = {
  imageUrl?: string;
  width?: number;
  height?: number;
};

const getBoxStyle = () => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

const ImageChip: FC<Props> = ({ imageUrl, width = 30, height = 30 }) => {
  const [showImage, setShowImage] = useState(true);

  if (!showImage || !imageUrl || !isValidUrl(imageUrl)) return <>-</>;
  return (
    <Box sx={getBoxStyle}>
      <Tooltip title={imageUrl}>
        <Paper sx={{ width: width, height: height }}>
          <Image
            src={imageUrl}
            alt=""
            width={width}
            height={height}
            onError={() => setShowImage(false)}
          />
        </Paper>
      </Tooltip>
    </Box>
  );
};

export default memo(ImageChip);
