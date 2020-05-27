import React, { useState, useEffect } from "react"
import Base from "../../components/base/index"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Plex from '../../components/home/services/Plex';
import Dell from '../../components/home/services/Dell';
import Jetson from '../../components/home/services/Jetson';
import Transmission from '../../components/home/services/Transmission';
import Netdata from '../../components/home/services/Netdata';
import WSO2 from '../../components/home/services/WSO2';
import HomeTitle from '../../components/home/HomeTitle';

import MeAPI from '../../data/api/meAPI'

const useStyles = makeStyles(theme => ({
  container: {
    height: "100%",
  },
}))

const Home = props => {
  const classes = useStyles()
  const [isHomeLive, setIsHomeLive] = useState(null)
  useEffect(() => {
    MeAPI.ping('me')
      .then(setIsHomeLive)
      .catch(error => {
        console.error(error);
        setIsHomeLive(false);
      });
  }, [])
  return (
    <Base>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item md={6}>
          <Typography align="center" variant="h4">
            <HomeTitle isOnline={isHomeLive} />
          </Typography>
          <Divider />
          <Box pt={3}>
            <Grid
              container
              direction="row"
              spacing={3}
            >
              <Jetson isHomeLive={isHomeLive} />
              <Dell />
              <Plex />
              <Transmission />
              <Netdata />
              <WSO2 />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Base>
  )
}

export default Home;