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
    const { title, children } = props;
    const theme = useTheme();
    const classes = useStyles();
    return (
        <Box mb={4} mt={4}>
            <Box textAlign="center" fontSize="h3.fontSize">
                {title}
            </Box>
            <Box className={classes.subTitle} textAlign="center" fontSize="subtitle1.fontSize">
                {children}
            </Box>
        </Box>
    )
}
