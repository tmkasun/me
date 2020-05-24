import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import Tooltip from '@material-ui/core/Tooltip'

const commonStyles = {
    backgroundSize: "3px 3px",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    position: "absolute",
    animation: "2s $blink infinite",
}
const useStyles = makeStyles(theme => ({
    "red": {
        "background": "red",
        "backgroundImage": "radial-gradient(brown, transparent)",
        "border": "dotted 1px red",
        "boxShadow": "0 0 2px #111 inset,0 0 5px red",
        ...commonStyles
    },
    "yellow": {
        "background": "yellow",
        "backgroundImage": "radial-gradient(orange, transparent)",
        "border": "dotted 1px yellow",
        "boxShadow": "0 0 2px #111 inset, 0 0 5px yellow",
        ...commonStyles
    },
    "green": {
        "background": "green",
        "backgroundImage": "radial-gradient(lime, transparent)",
        "border": "dotted 1px lime",
        "boxShadow": "0 0 2px #111 inset, 0 0 5px lime",
        ...commonStyles
    },
    '@keyframes blink': {
        '0%': { opacity: 0.1 },
        '50%': { opacity: 1 },
        '100%': { opacity: 0.1 },
    }
}))

export default ({ status }) => {
    const classes = useStyles()
    return (
        <Tooltip title={status} placement="top-start">
            <span>
            {status === 'offline' && <div className={classes.red}></div>}
            {status === 'unknown' && <div className={classes.yellow}></div>}
            {status === 'online' && <div className={classes.green}></div>}
            </span>
        </Tooltip>
    )
}