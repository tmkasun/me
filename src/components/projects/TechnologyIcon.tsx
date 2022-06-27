import React from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
type TechnologyIconProps = {
  title?: string;
  name: string;
  src?: string;
};
function TechnologyIcon({ title, name, src }: TechnologyIconProps) {
  return (
    <Tooltip title={title || name}>
      <Avatar sx={{ width: 24, height: 24 }} alt={name} src={src} />
    </Tooltip>
  );
}

export default TechnologyIcon;
