import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import MeAPI from '../../../data/api/meAPI'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SwitchListSecondary(props) {
    const classes = useStyles();
    const { data } = props;
    const { MANUFACTURER, PROCESSOR, RAM, TYPE, isLow } = data || {};
    const [isPowerLow, setIsPowerLow] = React.useState(isLow);
    const [isLoading, setIsLoading] = React.useState(false);
    const handleToggle = (powerState) => () => {
        setIsLoading(true);
        const operation = { "power": { "isLow": powerState } }
        MeAPI.updateDevice('ac', operation).then(response => {
            debugger;
            setIsPowerLow(powerState);
        }).finally(() => {
            setIsLoading(false);
        })
    };

    return (
        <Paper>
            <List subheader={<ListSubheader>{TYPE}</ListSubheader>} className={classes.root}>
                <ListItem>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>
                    <ListItemText id="man-id" secondary="Manufacturer" primary={MANUFACTURER} />
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>
                    <ListItemText id="pros-id" secondary="Processor" primary={PROCESSOR} />
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>
                    <ListItemText id="mem-id" secondary="Memory" primary={RAM} />
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <PowerSettingsNewIcon />
                    </ListItemIcon>
                    <ListItemText id="power-id" primary="Power On" />
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            onChange={handleToggle(!isPowerLow)}
                            checked={!isPowerLow}
                            inputProps={{ 'aria-labelledby': 'power-id' }}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Paper>
    );
}