import React from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
type TechnologyIconProps = {
    title?: string;
    name: string;
    src?: string;
};
function TechnologyIcon({ title, name, src }: TechnologyIconProps) {
    const ratio = 27;
    return (
        <Tooltip title={title || name}>
            <Avatar
                sx={{
                    // Ref: https://zurb.com/playground/osx-dock
                    width: ratio,
                    height: ratio,
                    WebkitTransition: "all 0.3s",
                    WebkitTransformOrigin: "50% 100%",
                    "&:hover": {
                        transform: "scale(1.5)",
                        position: "static",
                        zIndex: "200",
                        "&.nearby": {
                            transform: "scale(1.3)",
                            zIndex: "100",
                        },
                    },
                }}
                alt={name}
                src={src}
            />
        </Tooltip>
    );
}

export default TechnologyIcon;
