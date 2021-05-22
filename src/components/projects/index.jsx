import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Link from "../base/KLink"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

const useStyles = makeStyles(theme => ({
  card: {
    minHeight: 250,
    paddingBottom: 20,
    transition: "transform 0.25s ease-in-out",
    "&:hover": { transform: "scale3d(1.04, 1.04, 1)" },
  },
  media: {
    height: 220,
  },
}))
export default props => {
  const classes = useStyles()
  const [apps] = useState([
    {
      name: 'WSO2 APIM 4.0.0', description: (
        <div>
          <h3>DEMO</h3>
          <ul>
            <li>username: <b>demo</b></li>
            <li>password: <b>password</b></li>
          </ul>
        </div>
      ), url: 'https://apim.knnect.com/publisher'
    },
    { name: 'Micro frontends', description: 'Demo on Micro-FE using webpack module federation.', url: 'https://knnect-mf-app1.netlify.app/' },
    { name: 'Personal Web', description: 'I have developed this personal web portal to match with my custom requirements and was inspired by `overreacted` `addyosmani` and many other great personal web portals', url: 'https://github.com/tmkasun/me' },
    { name: 'Git Stats', description: 'Show PR status of pre-defined github filtering query using Github REST APIs', url: 'https://csb-vrskp.netlify.app/' },
    { name: 'API Portal', description: 'Extensible and customizable API portal React application using GatsbyJS', url: 'https://github.com/tmkasun/api-portal' },
    { name: 'Home Server', description: 'Knnect Home server', url: '/home' },
    { name: 'C++ Basics', description: 'How C++ (AKA CPP) programs works', url: 'https://github.com/tmkasun/understanding_cpp' },
    { name: 'Streaming Graph partitioning', description: 'Simulate how Graph partitioning works', url: 'https://github.com/tmkasun/streaming_graph_partitioning' },
    { name: 'Mock servers for network testing', description: 'Contains mock server implementations for HTTP, HTTPS, JMS, TCP, WebSocket', url: 'https://github.com/tmkasun/apim_pyclient/tree/master/mock_servers' },
    { name: 'IMD Weather Animator', description: 'Animate Indian meteorological department Satellite Images', url: 'https://github.com/tmkasun/imd_weather_animator' },
    { name: 'Compiler theory basics', description: 'This repository contains components of a compiler in order to learn the basics of compilers', url: 'https://github.com/tmkasun/mini_compiler' },
    { name: 'Geo Dashboard', description: 'Geo dashboard with object tracking geo fencing and some other geo spatial tacking features', url: 'https://github.com/tmkasun/geo_dashboard' },

  ])

  return (
    <Grid
      style={{ padding: "10px" }}
      spacing={2}
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      {apps &&
        apps.map(app => (
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card raised elevation={1} className={classes.card}>
              <Link href={app.url}>
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
                  >
                    {app.description}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
    </Grid>
  )
}
