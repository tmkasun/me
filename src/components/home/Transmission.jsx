import React from 'react'
import HomeService from './HomeService'
import txIcon from '../../../static/images/home/transmission.png';

const Transmission = (props) => {

    return (
        <HomeService name="Transmission (Torrent)" url="http://tx.home.knnect.com/web/" icon={txIcon} status={'unknown'} />
    )
}
export default Transmission