import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
    icons: {
        width: isXS => isXS ? '70px' : '100px',
        height: isXS => isXS ? '70px' : '100px',
    },
}))

const ItemSection = props => {
    const { marginTop, icon, title, description } = props

    const isXS = useMediaQuery('(min-width:600px)'); // when size become xs https://material-ui.com/customization/breakpoints/
    const classes = useStyles(!isXS)
    return (
        <Box mt={marginTop}>
            <Grid container direction="row"
                justify="center"
                alignItems="center" spacing={1}>
                <Grid item md={2} sm={2} xs={3}>
                    <Avatar className={classes.icons} alt="Kasun Thennakoon" src={icon} />
                </Grid>
                {isXS && <Grid md={0} sm={1} xs={0} />}
                <Grid item md={8} sm={9} xs={9}>
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="stretch"
                        spacing={2}
                    >
                        <Grid item>
                            <Typography variant="h5">
                                {title}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

ItemSection.defaultProps = { marginTop: 10 }

export default ItemSection;