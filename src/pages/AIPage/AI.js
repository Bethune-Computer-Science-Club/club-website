import React from 'react'

import {CategoryPages} from '../../components'
import {BannerInfo} from './Data'

function AI() {

    return (
        <CategoryPages BannerInfo={BannerInfo} projectType = 'ai'></CategoryPages>
    )
}

export default AI