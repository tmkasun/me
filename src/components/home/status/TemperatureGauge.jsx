import React from 'react'
import Box from '@material-ui/core/Box';

import LinearGauge from '../../common/Gauge'

export default (props) => {
    const { name } = props;
    const gOptions = {
        units: "°C",
        minValue: 0,
        startAngle: 90,
        ticksAngle: 180,
        valueBox: true,
        maxValue: 60,
        majorTicks: [
            "0",
            "10",
            "25",
            "30",
            "35",
            "45",
            "60",
        ],
        minorTicks: 10,
        strokeTicks: true,
        highlights: [

            {
                "from": 20,
                "to": 40,
                color: "rgb(0 255 68 / 87%)",
            },
            {
                "from": 40,
                "to": 50,
                color: "rgb(255 225 0 / 87%)",
            },
            {
                "from": 50,
                "to": 60,
                "color": "rgba(200, 50, 50, .75)"
            },
        ],
        colorPlate: "#fff",
        borderShadowWidth: 0,
        borders: false,
        needleType: "arrow",
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear",
        barWidth: 3,
    }
    return (

        <Box
            border={1}
            borderRadius={16}
            borderColor="grey.500"
            fontFamily="h6.fontFamily"
            fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
            p={{ xs: 2, sm: 3, md: 4 }}
            m={1}
        >
            <Box textAlign="left">
                {name}
            </Box>
            <LinearGauge {...{ ...gOptions, ...props }} />
        </Box>)
}