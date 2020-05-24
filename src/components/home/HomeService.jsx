import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
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
    const { name, icon, status, url } = props;
    const classes = useStyles()
    // const preventDefault = (event) => event.preventDefault();


    return (
        <ListItem>
            <ListItemIcon>
                <Avatar alt={name} src={icon} className={classes.large} />
            </ListItemIcon>
            <Link href={url}>
                <ListItemText id={`list-label-${name}`} primary={name} />
            </Link>
            <ListItemSecondaryAction>
                <Status status={status} />
            </ListItemSecondaryAction>
        </ListItem>
    )
}
export default HomeService