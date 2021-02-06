import React, { useEffect, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import Grid from "@material-ui/core/Grid"
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import Tooltip from '@material-ui/core/Tooltip';
import MeAPI from '../../../data/api/meAPI'
// import { SLT_RES, DIALOG_RES } from "./tests/sample" // For testing

dayjs.extend(relativeTime)

const roundTo = (number) => {
    return Math.round(parseFloat(number) * 10) / 10
}

export default (props) => {
    const [sltUsage, setSltUsage] = useState();
    const [dialogUsage, setDialogUsage] = useState();
    useEffect(() => {
        MeAPI.geUsage().then(setSltUsage)
        MeAPI.geUsage("dialog").then(setDialogUsage)
    }, []);

    const { my_package_info } = sltUsage || {}
    const [sltPackUsage] = my_package_info && my_package_info.usageDetails || []
    const { used, remaining, remaining_unit, expire_date } = dialogUsage || {}
    return (
        <>
            <Grid item md={5}>
                <Typography variant="h6">
                    SLT Usage <Typography variant="caption">
                        <Tooltip title={expire_date} placement="top-start">
                            <span>
                                Expire {dayjs().to(dayjs().startOf('M').month(2))}
                            </span>
                        </Tooltip>
                    </Typography>
                </Typography>
                {!sltPackUsage && <CircularProgress />}
                {sltPackUsage && <PieChart
                    animate
                    data={[
                        { title: `Remaining`, value: roundTo(sltPackUsage.remaining), color: '#20d05fe8' },
                        { title: `Used`, value: roundTo(sltPackUsage.used), color: '#f13030e8' },
                    ]}
                    label={({ dataEntry }) => `${dataEntry.title} ${dataEntry.value} ${sltPackUsage.volume_unit} (${roundTo(dataEntry.percentage)}%)`}
                    labelStyle={{
                        fontSize: '3px',
                        fontFamily: 'sans-serif',
                        fill: 'black',
                    }}
                />}
            </Grid>
            <Grid item md={5}>
                <Typography variant="h6">
                    Dialog Usage <Typography variant="caption">
                        <Tooltip title={expire_date} placement="top-start">
                            <span>
                                Expire {dayjs().to(dayjs(expire_date))}
                            </span>
                        </Tooltip>
                    </Typography>
                </Typography>
                {!dialogUsage && <CircularProgress />}
                {dialogUsage && <PieChart
                    animate
                    data={[
                        { title: `Remaining`, value: roundTo(remaining), color: '#20d05fe8' },
                        { title: `Used`, value: roundTo(used), color: '#f13030e8' },
                    ]}
                    label={({ dataEntry }) => `${dataEntry.title} ${dataEntry.value} ${remaining_unit} (${roundTo(dataEntry.percentage)}%)`}
                    labelStyle={{
                        fontSize: '3px',
                        fontFamily: 'sans-serif',
                        fill: 'black',
                    }}
                />}
            </Grid>
            <Grid item md={5}>
                <Typography variant="h6">
                    Total Remaining
                </Typography>
                {(!dialogUsage || !sltPackUsage) && <CircularProgress />}
                {dialogUsage && sltPackUsage && <PieChart
                    animate
                    totalValue={40 + 80}
                    background="#d4ded4e3"
                    data={[
                        { title: `SLT`, value: roundTo(sltPackUsage.remaining), color: '#00e7ffde' },
                        { title: `Dialog`, value: roundTo(remaining), color: '#f13030e8' },
                    ]}
                    label={({ dataEntry }) => `${dataEntry.title} ${dataEntry.value} ${remaining_unit} (${roundTo(dataEntry.percentage)}%)`}
                    labelStyle={{
                        fontSize: '3px',
                        fontFamily: 'sans-serif',
                        fill: 'black',
                    }}
                />}
            </Grid>
        </>

    )
}