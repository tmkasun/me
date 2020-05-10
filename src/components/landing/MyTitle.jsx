import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Box from '@material-ui/core/Box';
import blue from '@material-ui/core/colors/blue'
import blueGrey from '@material-ui/core/colors/blueGrey'


const useStyles = makeStyles(theme => ({
    wso2: {
        color: '#ff7300'
    }
    ,
    apim: {
        color: theme.palette.type === 'light' ? blue[900] : blue[200]

    },
    subTitle: {
        color: theme.palette.type === 'light' ? blueGrey[600] : blueGrey[100]
    }
}))

export default props => {
    const theme = useTheme();
    const classes = useStyles()
    return (
        <Box mb={4} mt={4}>
            <Typography align="center" variant="h3">
                Kasun Thennakoon
            </Typography>
            <Typography className={classes.subTitle} align="center" variant="subtitle1">
                Associate Technical Lead at <span className={classes.wso2}>WSO2</span> working on product {' '}
                <Tooltip placement="top-end" interactive TransitionComponent={Zoom} title="API Manager">
                    <Box className={classes.apim} display="inline">API-M</Box>
                </Tooltip>
            </Typography>
        </Box>
    )
}
