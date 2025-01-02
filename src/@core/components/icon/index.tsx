import React, { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { Icon as Iconify } from "@iconify/react";

export type IconProps = SvgIconProps & {
  icon: string;
  color?: SvgIconProps["color"];
};

const Icon: React.FC<IconProps> = ({ icon, color, ...props }) => {
  return (
    <SvgIcon
      component={Iconify}
      icon={icon}
      color={color}
      style={{ color: "inherit" }}
      {...props}
    />
  );
};

export default memo(Icon);
