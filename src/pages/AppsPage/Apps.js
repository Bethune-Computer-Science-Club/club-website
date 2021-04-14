import React from 'react'

import {CategoryPages} from '../../components'
import {ProjectsInfo, BannerInfo} from './Data'

function Apps() {

    return (
        <CategoryPages BannerInfo={BannerInfo} ProjectsInfo={ProjectsInfo}></CategoryPages>
    )
}

export default Apps