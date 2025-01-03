import { SvgIcon, SvgIconProps } from '@mui/material';
import React, { memo } from 'react';

import { Icon as Iconify } from '@iconify/react';

export type IconProps = SvgIconProps & {
  icon: string;
  color?: SvgIconProps['color'];
  hidden?: boolean;
};

const Icon: React.FC<IconProps> = ({ icon, color, hidden, ...props }) => {
  if (hidden) {
    return null;
  }

  return (
    <SvgIcon
      component={Iconify}
      icon={icon}
      color={color}
      style={{ color: 'inherit' }}
      {...props}
    />
  );
};

export default memo(Icon);
