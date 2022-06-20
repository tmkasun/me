import { Avatar, Box, Grid, Typography, useMediaQuery } from "@mui/material";

type ItemSectionProps = {
  marginTop?: number;
  icon: string;
  title: string;
  children: React.ReactNode | string;
};
const ItemSection: React.FC<ItemSectionProps> = (props) => {
  const { marginTop = 10, icon, title, children } = props;

  const isXS = useMediaQuery("(min-width:600px)"); // when size become xs https://material-ui.com/customization/breakpoints/
  return (
    <Box
      sx={{
        mt: marginTop,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item md={2} sm={2} xs={3}>
          <Avatar
            sx={{
              width: isXS ? "70px" : "100px",
              height: isXS ? "70px" : "100px",
            }}
            alt="Kasun Thennakoon"
            src={icon}
          />
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

export default ItemSection;
