import React from 'react'

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import Status from '../../components/home/Status';
import Link from '../../components/base/KLink';

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    large: {
        width: '32px',
        height: '32px'
    }
}))

const HomeService = (props) => {
    const { name, icon, status, url, isSubMenu, children } = props;
    const classes = useStyles()

    return (
        <Grid item md={12}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                spacing={1}
            >
                <Grid item md={isSubMenu ? 1 : false} />
                <Grid item md={1}>
                    <Avatar alt={name} src={icon} className={classes.large} />
                </Grid>
                <Grid item md={isSubMenu ? 6 : 7}>
                    <Link href={url}>
                        {name}
                    </Link>
                </Grid>
                <Grid item md={2}>
                    {children}
                </Grid>
                <Grid style={{ paddingBottom: '24px' }} item md={1}>
                    <Status status={status} />
                </Grid>
            </Grid>
        </Grid>
    )
}

HomeService.defaultProps = {
    isSubMenu: false
}
export default HomeService