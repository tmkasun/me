/**
 * Switch the image source based on the current color mode (light or dark).
 * This component is meant to be used inside MDX files to easily switch images based on the theme.
 */

import { useTheme } from "@mui/material/styles";

interface ColorModeImgProps {
    lightSrc: string;
    darkSrc?: string; // Optional: if not provided, it will use <lightSrc>_dark.png as the dark mode image
    alt?: string;
    [key: string]: any; // Allow additional props like className, style, etc.
}

const ColorModeImg: React.FC<ColorModeImgProps> = ({
    lightSrc,
    darkSrc,
    alt = "",
    ...props
}) => {
    const theme = useTheme();
    const src = theme.palette.mode === "light" ? lightSrc : darkSrc || `${lightSrc.split('.')[0]}_dark.png`;

    return <img src={src} alt={alt} {...props} />;
};

export default ColorModeImg;