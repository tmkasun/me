import React, { useEffect, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import Grid from "@material-ui/core/Grid"


export default (props) => {
    const [sltUsage, setSltUsage] = useState();
    const [dialogUsage, setDialogUsage] = useState();
    useEffect(() => {
        fetch("http://localhost:9900/apis/slt/0771226262").then(res => res.json()).then(setSltUsage)
        fetch("http://localhost:9900/apis/dialog/0771226262").then(res => res.json()).then(setDialogUsage)
    }, []);
    if (!sltUsage || !dialogUsage) {
        return "Loading . . ."
    }
    const { usageDetails } = sltUsage.my_package_info
    const { used, remaining, remaining_unit } = dialogUsage
    return (
        <>
            <Grid item md={6}>
                <PieChart
                    data={[
                        { title: `Remaining ${usageDetails[0].volume_unit}`, value: parseFloat(usageDetails[0].remaining), color: 'green' },
                        { title: `Used ${usageDetails[0].volume_unit}`, value: parseFloat(usageDetails[0].used), color: 'red' },
                    ]}
                    label={({ dataEntry }) => `${dataEntry.value} ${usageDetails[0].volume_unit}`}
                    labelStyle={{
                        fontSize: '5px',
                        fontFamily: 'sans-serif',
                        fill: 'black',
                    }}
                />
            </Grid>
            <Grid item md={6}>
                <PieChart
                    data={[
                        { title: `Remaining ${remaining_unit}`, value: parseFloat(remaining), color: 'green' },
                        { title: `Used ${remaining_unit}`, value: parseFloat(used), color: 'red' },
                    ]}
                    label={({ dataEntry }) => `${dataEntry.value} ${remaining_unit}`}
                    labelStyle={{
                        fontSize: '5px',
                        fontFamily: 'sans-serif',
                        fill: 'black',
                    }}
                />
            </Grid>
        </>

    )
}