import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  container: {
    height: "100%",
  },
  appContent: {
    marginTop: theme.spacing(2),
    maxWidth: "95%",
    margin: "auto",
    maxHeight: theme.spacing(90),
    height: theme.spacing(90),
    overflow: "scroll",
  },
  card: {
    "& a": {
      color: "inherit",
    },
    maxWidth: 270,
    minHeight: 250,
    paddingBottom: 20,
  },
  media: {
    height: 220,
  },
}))
export default props => {
  const classes = useStyles()
  const [apps] = useState([
    { name: 'Personal Web', description: 'This personal web portal was developed from the scratch inspired by `overreacted` `addyosmani` and many other great personal web portals', url: 'https://github.com/tmkasun/me' },
    { name: 'Git Stats', description: 'Show PR status', url: 'https://csb-vrskp.netlify.app/' },
    { name: 'Home Server', description: 'Knnect Home server', url: '/home' },
    { name: 'C++ Basics', description: 'How C++ (AKA CPP) programs works', url: 'https://github.com/tmkasun/understanding_cpp' },
    { name: 'Streaming Graph partitioning', description: 'Simulate how Graph partitioning works', url: 'https://github.com/tmkasun/streaming_graph_partitioning' },
    { name: 'Mock servers for network testing', description: 'Contains mock server implementations for HTTP, HTTPS, JMS, TCP, WebSocket', url: 'https://github.com/tmkasun/apim_pyclient/tree/master/mock_servers' },
    { name: 'IMD Weather Animator', description: 'Animate Indian meteorological department Satellite Images', url: 'https://github.com/tmkasun/imd_weather_animator' },
    { name: 'Compiler theory basics', description: 'This repository contains components of a compiler in order to learn the basics of compilers', url: 'https://github.com/tmkasun/mini_compiler' },
    { name: 'Geo Dashboard', description: 'Geo dashboard with object tracking geo fencing and some other geo spatial tacking features', url: 'https://github.com/tmkasun/geo_dashboard' },
  ])

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item md={6}>
        <Typography align="center" variant="h5">
          Applications
        </Typography>
        <Divider />
        <Grid
          container
          spacing={0}
          justify="center"
          className={classes.container}
        >
          <Grid item xs={12}>
            <div className={classes.appContent}>
              <Grid
                style={{ padding: "10px" }}
                spacing={1}
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                {apps &&
                  apps.map(app => (
                    <Grid item xs={3}>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <a href={app.url}>
                            <CardContent className={classes.media}>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {app.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                {app.description}
                              </Typography>
                            </CardContent>
                          </a>
                        </CardActionArea>
                        <CardActions>
                          <a href={app.url}>
                            <Button aria-label="Edit" variant="outlined" color="primary">
                              Link
                            </Button>
                          </a>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
