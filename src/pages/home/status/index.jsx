
import React, { useState, useEffect } from "react"
import Base from "../../../components/base/index"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from '@material-ui/core/CircularProgress';

import MeAPI from '../../../data/api/meAPI'
import TemperatureGauge from '../../../components/home/status/TemperatureGauge'
import ACStatus from '../../../components/home/status/ACStatus'

const useStyles = makeStyles(theme => ({
    container: {
        height: "100%",
    },
}))

const Home = props => {
    const classes = useStyles()
    const [jetson, setJetson] = useState(null)
    const [ac, setAc] = useState(null)
    useEffect(() => {
        MeAPI.getDevice('jetson')
            .then(setJetson)
            .catch(error => {
                console.error(error);
                setJetson(false);
            });
        MeAPI.getDevice('ac')
            .then(setAc)
            .catch(error => {
                console.error(error);
                setAc(false);
            });
    }, [])

    return (
        <Base>
            <Grid spacing={9} container direction="row" justify="center" alignItems="center">
                <Grid item md={3}>
                    {!ac ? <CircularProgress /> : <ACStatus data={ac} />}
                </Grid>
                <Grid item md={3}>
                    <ACStatus />

                </Grid>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
                {!jetson && <CircularProgress />}
                {jetson && Object.entries(jetson).sort((a, b) => a[1] - b[1]).map(([key, val]) =>
                    <TemperatureGauge key={key} name={key} value={val} isRadial />
                )}
            </Grid>
        </Base>
    )
}

export default Home;