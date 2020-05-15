import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Box from '@material-ui/core/Box';
import blueGrey from '@material-ui/core/colors/blueGrey'


const useStyles = makeStyles(theme => ({
    
    subTitle: {
        color: theme.palette.type === 'light' ? blueGrey[600] : blueGrey[100]
    }
}))

export default props => {
    const {title, children} = props;
    const theme = useTheme();
    const classes = useStyles()
    return (
        <Box mb={4} mt={4}>
            <Typography align="center" variant="h3">
                {title}
            </Typography>
            <Typography className={classes.subTitle} align="center" variant="subtitle1">
               {children} 
            </Typography>
        </Box>
    )
}
