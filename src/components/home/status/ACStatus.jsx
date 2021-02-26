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
import BluetoothIcon from '@material-ui/icons/Bluetooth';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SwitchListSecondary(props) {
    const classes = useStyles();
    const {data} = props;
    const {MANUFACTURER,PROCESSOR,RAM,TYPE,isLow} = data || {};
    const [checked, setChecked] = React.useState(['wifi']);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Paper>
            <List subheader={<ListSubheader>{TYPE}</ListSubheader>} className={classes.root}>
                <ListItem>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" secondary="Manufacturer" primary={MANUFACTURER} />
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" secondary="Processor" primary={PROCESSOR} />
                </ListItem>
                
                <ListItem>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" secondary="Memory" primary={RAM} />
                </ListItem>
                
                <ListItem>
                    <ListItemIcon>
                        <PowerSettingsNewIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-bluetooth" primary="Power On" />
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            onChange={handleToggle('bluetooth')}
                            checked={!isLow}
                            inputProps={{ 'aria-labelledby': 'switch-list-label-bluetooth' }}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Paper>
    );
}