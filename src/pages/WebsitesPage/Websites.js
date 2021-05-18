import React from 'react'

import {CategoryPages} from '../../components'
import {BannerInfo} from './Data'

function Websites() {

    return (
        <CategoryPages BannerInfo={BannerInfo} projectType = 'websites'></CategoryPages>
    )
}

export default Websites