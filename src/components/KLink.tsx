import React from "react";
import { cyan, lightBlue } from "@mui/material/colors";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

type KLinkProps = {
  type?: string;
  href: string;
  target?: string;
};
/**
 *
 * Specially wrapped MUI link component to do the styling in dark theme
 * To make the link formatting easier we add spaces surrounding the child text
 * @param {Object} props
 */
export const KLink: React.FC<KLinkProps> = (props) => {
  const { type = "link", children, href, target = "_blank" } = props;
  return (
    <Box mx={1}>
      <Link
        sx={(theme) => ({
          color: theme.palette.mode === "light" ? lightBlue[900] : cyan[200],
        })}
        target={target}
        rel="noopener"
        href={href}
      >
        {children}
      </Link>
    </Box>
  );
};

export default KLink;
