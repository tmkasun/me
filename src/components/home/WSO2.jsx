import React from 'react'
import HomeService from './HomeService'
import wso2Icon from '../../../static/images/home/wso2.png';

const WSO2 = (props) => {

    return (
        <HomeService name="WSO2 APIM 3.1.0" url="https://apim.home.knnect.com:9443/publisher" icon={wso2Icon} status={'offline'} />
    )
}
export default WSO2