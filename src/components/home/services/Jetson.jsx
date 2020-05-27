import React from 'react'
import HomeService from '../HomeService'
import nvidiaIcon from '../../../../static/images/home/nvidia.png';

const Jetson = (props) => {
    const {isHomeLive} = props;
    const status = isHomeLive === null ? 'unknown' : isHomeLive ? 'online' : 'offline'
    return (
        <HomeService name="Jetson Server" url="http://home.knnect.com" icon={nvidiaIcon} status={status} />
    )
}
export default Jetson