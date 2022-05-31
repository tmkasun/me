import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type LandingItemProps = {
  icon: any;
  title: string;
  marginTop?: number;
};

const LandingItem: React.FC<LandingItemProps> = (props) => {
  const { marginTop, icon, title, children } = props;

  const isXS = useMediaQuery("(min-width:600px)"); // when size become xs https://material-ui.com/customization/breakpoints/

  const sizeAwareStyles = {
    width: isXS ? "70px" : "100px",
    height: isXS ? "70px" : "100px",
  };
  return (
    <Box mt={marginTop}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item md={2} sm={2} xs={3}>
          <Avatar sx={sizeAwareStyles} alt="Kasun Thennakoon" src={icon} />
        </Grid>
        {isXS && <Grid item md={false} sm={1} xs={false} />}
        <Grid item md={8} sm={9} xs={9}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{children}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

LandingItem.defaultProps = { marginTop: 10 };

export default LandingItem;
