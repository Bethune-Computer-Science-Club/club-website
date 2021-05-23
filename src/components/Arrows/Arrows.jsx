import React from 'react'

import {
  DownwardsArrows,
  UpwardsArrows
} from './Arrows.elements'

// showContent: A boolean state. False: Arrows point downwards. True: Arrows point upwards.
const Arrows = ({showContent}) => {
  return (
    <>
        {
          (showContent) ? 
            <UpwardsArrows showContent={showContent}></UpwardsArrows>
          :
            <DownwardsArrows showContent={showContent}></DownwardsArrows>
        }
    </>
  )
}

export default Arrows
