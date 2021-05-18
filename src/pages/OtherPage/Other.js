import React from 'react'

import {CategoryPages} from '../../components'
import {BannerInfo} from './Data'

function Other() {

    return (
        <CategoryPages BannerInfo={BannerInfo} projectType = 'other'></CategoryPages>
    )
}

export default Other