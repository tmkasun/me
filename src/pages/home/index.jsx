import React from "react"
import Base from "../../components/base/index"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import Plex from '../../components/home/Plex';
import Dell from '../../components/home/Dell';
import Transmission from '../../components/home/Transmission';
import Netdata from '../../components/home/Netdata';
import WSO2 from '../../components/home/WSO2';

const useStyles = makeStyles(theme => ({
  container: {
    height: "100%",
  },
}))

const Home = props => {
  const classes = useStyles()
  return (
    <Base>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item md={6}>
          <Typography align="center" variant="h5">
            Knnect Home
          </Typography>
          <Divider />
          <Grid
            container
            spacing={4}
            direction="column"
            justify="center"
            className={classes.container}

          >
            <Grid item md={12}>
              <List subheader={<ListSubheader>Services</ListSubheader>} className={classes.root}>
                <Plex />
                <Dell />
                <Transmission />
                <Netdata/>
                <WSO2/>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Base>
  )
}

export default Home;