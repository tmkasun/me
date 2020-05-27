import React, { useState, useEffect } from 'react'
import HomeService from '../HomeService'
import dellIcon from '../../../../static/images/home/dell.png';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';

import MeAPI from '../../../data/api/meAPI'

const Dell = (props) => {
    const [isDellLive, setIsDellLive] = useState(null)
    const [isToggling, setIsToggling] = useState(false)
    const [isChecking, setIsChecking] = useState(false)
    const [intervalId, setIntervalId] = useState(-1)

    useEffect(() => {
        MeAPI.ping('dell').then(setIsDellLive).catch(error => setIsDellLive(false))
    }, [])
    useEffect(() => {
        clearInterval(intervalId)
        setIntervalId(-1)
    }, [isDellLive])

    const status = isDellLive === null || isToggling || isChecking ? 'unknown' : isDellLive ? (isDellLive.status ? 'online' : 'offline') : 'offline'

    const togglePower = () => {
        if (status === 'unknown') {
            return false;
        }
        setIsToggling(true)
        if (status === 'online') {
            MeAPI.powerOff('dell').then(data => {
                if (!data.status) {
                    alert("Something went wrong while power off")
                } else {
                    setIsChecking(true);
                    const intId = setInterval(() => {
                        MeAPI.ping('dell').then(data => {
                            if (data.status === false) {
                                setIsChecking(false);
                                setIsDellLive({ status: false });
                            } else {
                                setIsChecking(data)
                            }
                        }).catch(error => setIsDellLive({ status: false }))
                    }, 1000);
                    setIntervalId(intId)
                }
            }).catch(error => setIsDellLive({ status: false })).finally(() => setIsToggling(false))
        } else if (status === 'offline') {
            MeAPI.wakeOnLan('dell').then(data => {
                if (!data.status) {
                    alert("Something went wrong while power off")
                } else {
                    setIsChecking(true);
                    const intId = setInterval(() => {
                        MeAPI.ping('dell').then(data => {
                            if (data.status === true) {
                                setIsChecking(false);
                                setIsDellLive({ status: true });
                            } else {
                                setIsChecking(data)
                            }
                        }).catch(error => setIsDellLive({ status: false }))
                    }, 1000);
                    setIntervalId(intId)
                }
            }).catch(error => setIsDellLive({ status: false })).finally(() => setIsToggling(false))
        }
    }

    let switchColor;
    if (status === 'unknown') {
        switchColor = 'yellow';
    }
    else if (status === 'offline') {
        switchColor = 'red'
    } else if (status === 'online') {
        switchColor = 'green'
    }

    return (
        <HomeService name="Dell Server" url="" icon={dellIcon} status={status} >
            {isChecking && isChecking.timestamp}
            <IconButton onClick={togglePower} disabled={status === 'unknown'} aria-label="delete">
                <PowerSettingsNewIcon style={{ color: switchColor }} />
            </IconButton>
        </HomeService>
    )
}
export default Dell