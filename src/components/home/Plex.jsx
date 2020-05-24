import React from 'react'
import HomeService from './HomeService'
import plexIcon from '../../../static/images/home/plex-flat.png';


const Plex = (props) => {

    return (
        <HomeService name="Plex Media" url="https://plex.knnect.com/" icon={plexIcon} status={'online'} />
    )
}
export default Plex