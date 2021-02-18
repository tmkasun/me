
import React, { useState, useEffect } from "react"
import Base from "../../../components/base/index"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from '@material-ui/core/CircularProgress';

import MeAPI from '../../../data/api/meAPI'
import TemperatureGauge from '../../../components/home/status/TemperatureGauge'

const useStyles = makeStyles(theme => ({
    container: {
        height: "100%",
    },
}))

const Home = props => {
    const classes = useStyles()
    const [jetson, setJetson] = useState(null)
    useEffect(() => {
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
                {!jetson && <CircularProgress />}
                {jetson && Object.entries(jetson).sort((a, b) => a[1] - b[1]).map(([key, val]) =>
                    <TemperatureGauge name={key} value={val} isRadial />
                )}
            </Grid>
        </Base>
    )
}

export default Home;