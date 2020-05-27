import React from 'react'
import HomeService from '../HomeService'
import txIcon from '../../../../static/images/home/transmission.png';

const Transmission = (props) => {

    return (
        <HomeService isSubMenu={true} name="Transmission (Torrent)" url="http://tx.home.knnect.com/web/" icon={txIcon} status={false} />
    )
}
export default Transmission