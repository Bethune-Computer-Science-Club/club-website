import React from 'react'

import {CategoryPages} from '../../components'
import {ProjectsInfo, BannerInfo} from './Data'

function Other() {

    return (
        <CategoryPages BannerInfo={BannerInfo} ProjectsInfo={ProjectsInfo}></CategoryPages>
    )
}

export default Other