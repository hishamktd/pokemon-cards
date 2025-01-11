import {
  IconButtonProps,
  IconButton as MuiIconButton,
  Tooltip,
} from '@mui/material';
import { memo } from 'react';

import Icon, { IconProps } from '../icon';

type Props = IconButtonProps & {
  icon: string;
  iconProps?: Omit<IconProps, 'icon'>;
  toolTip?: string;
};

const IconButton: React.FC<Props> = ({ icon, iconProps, toolTip, ...rest }) => {
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
