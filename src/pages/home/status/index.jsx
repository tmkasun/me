
import React, { useState, useEffect } from "react"
import Base from "../../../components/base/index"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { LinearGauge } from 'canvas-gauges'

import MeAPI from '../../../data/api/meAPI'

const useStyles = makeStyles(theme => ({
    container: {
        height: "100%",
    },
}))

const Home = props => {
    const classes = useStyles()
    const [jetson, setJetson] = useState(null)
    useEffect(() => {
        const options = Object.assign({}, this.props, {
            renderTo: this.el
        })
        this.gauge = new LinearGauge(options).draw()

        MeAPI.getDevice('jetson')
            .then(setJetson)
            .catch(error => {
                console.error(error);
                setJetson(false);
            });
    }, [])
    return (
        <Base>
            <Grid container direction="row" justify="center" alignItems="center">
                okk
      </Grid>
        </Base>
    )
}

export default Home;