import { Box } from '@mui/material';
import React, { memo } from 'react';

import { StyledTitle } from './styled-components';
import { TitleProps } from './types';
import Icon from '../../../lib/icons';

const fontSizeMap = {
  small: 24,
  medium: 26,
  large: 28,
};

const fontWeightMap = {
  light: 400,
  medium: 500,
  bold: 700,
};

const Title: React.FC<TitleProps> = ({
  title,
  variant = 'medium',
  weight = 'medium',
  icon,
  iconProps,
  containerProps,
  sx,
  ...props
}) => {
  return (
    <Box display="flex" alignItems="center" gap={1} {...containerProps}>
      {icon && <Icon icon={icon} {...iconProps} />}
      <StyledTitle
        sx={{
          fontSize: fontSizeMap[variant],
          fontWeight: fontWeightMap[weight],
          ...sx,
        }}
        {...props}
      >
        {title}
      </StyledTitle>
    </Box>
  );
};

export default memo(Title);
