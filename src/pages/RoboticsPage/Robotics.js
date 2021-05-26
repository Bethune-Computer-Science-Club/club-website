import React from 'react'

import {CategoryPages} from '../../components'
import {BannerInfo} from './Data'

function Robotics() {

    return (
        <CategoryPages BannerInfo={BannerInfo} projectType = 'ai'></CategoryPages>
    )
}

export default Robotics