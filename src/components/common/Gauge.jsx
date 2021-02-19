if (typeof window !== `undefined`) { // https://www.gatsbyjs.com/docs/debugging-html-builds/
    const LinearGauge = require('canvas-gauges').LinearGauge;
    const RadialGauge = require('canvas-gauges').RadialGauge;
}
import React, { useEffect, useRef } from 'react'

export default (props) => {
    const { value, isRadial = false } = props;
    const gaugeDOM = useRef();
    const gauge = useRef();
    useEffect(() => {
        const options = Object.assign({}, props, {
            renderTo: gaugeDOM.current
        })
        gauge.current = isRadial ? new RadialGauge(options).draw() : new LinearGauge(options).draw();
    }, []);
    useEffect(() => {
        gauge.current.value = value;
        gauge.current.update();
    }, [value])
    return (
        <canvas
            ref={gaugeDOM} />
    )
}