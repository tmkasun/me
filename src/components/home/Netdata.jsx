import React from 'react'
import HomeService from './HomeService'
import netDataIcon from '../../../static/images/home/netdata.png';


const Netdata = (props) => {

    return (
        <HomeService name="Netdata monitor" url="http://plex.knnect.com:19999/" icon={netDataIcon} status={'online'} />
    )
}
export default Netdata