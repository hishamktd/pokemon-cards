import {
  IconButtonProps as MuiIconButtonProps,
  IconButton as MuiIconButton,
  Tooltip,
} from '@mui/material';
import { memo } from 'react';

import Icon, { IconProps } from '../../../lib/icons';

export type IconButtonProps = MuiIconButtonProps & {
  icon: string;
  iconProps?: Omit<IconProps, 'icon'>;
  toolTip?: string;
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconProps,
  toolTip,
  ...rest
}) => {
  if (toolTip) {
    return (
      <MuiIconButton {...rest}>
        <Tooltip title={toolTip}>
          <Icon icon={icon} {...iconProps} />
        </Tooltip>
      </MuiIconButton>
    );
  }

  return (
    <MuiIconButton {...rest}>
      <Icon icon={icon} {...iconProps} />
    </MuiIconButton>
  );
};

export default memo(IconButton);
