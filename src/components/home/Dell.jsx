import React from 'react'
import HomeService from './HomeService'
import dellIcon from '../../../static/images/home/dell.png';

const Dell = (props) => {

    return (
        <HomeService name="Dell Server" url="" icon={dellIcon} status={'offline'} />
    )
}
export default Dell