import React from 'react'

import {CategoryPages} from '../../components'
import {ProjectsInfo, BannerInfo} from './Data'

function Games() {

    return (
        <CategoryPages BannerInfo={BannerInfo} ProjectsInfo={ProjectsInfo}></CategoryPages>
    )
}

export default Games