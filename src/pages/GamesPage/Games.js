import React from 'react'

import {CategoryPages} from '../../components'
import {BannerInfo} from './Data'

function Games() {
  return (
      <CategoryPages BannerInfo={BannerInfo} projectType = 'games'></CategoryPages>
  )
}

export default Games