import { IconButtonProps, IconButton as MuiIconButton } from "@mui/material";
import { memo } from "react";
import Icon, { IconProps } from "../icon";

type Props = IconButtonProps & {
  icon: string;
  iconProps?: IconProps;
};

const IconButton: React.FC<Props> = ({ icon, iconProps, ...rest }) => {
  return (
    <MuiIconButton {...rest}>
      <Icon icon={icon} {...iconProps} />
    </MuiIconButton>
  );
};

export default memo(IconButton);
