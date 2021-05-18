import React from 'react'

import {CategoryPages} from '../../components'
import {BannerInfo} from './Data'

function Apps() {

    return (
      <CategoryPages BannerInfo={BannerInfo} projectType = 'apps'></CategoryPages>
    )
}

export default Apps