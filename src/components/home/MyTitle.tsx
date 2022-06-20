import React from "react";
import { Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

type MyTitleProps = { title: String; children: React.ReactNode };
const MyTitle: React.FC<MyTitleProps> = ({ title, children }) => {
  return (
    <Box mb={4} mt={4}>
      <Box textAlign="center" fontSize="h3.fontSize">
        {title}
      </Box>
      <Box
        sx={(theme) => ({
          color: theme.palette.mode === "light" ? blueGrey[600] : blueGrey[100],
        })}
        textAlign="center"
        fontSize="subtitle1.fontSize"
      >
        {children}
      </Box>
    </Box>
  );
};

export default MyTitle;
