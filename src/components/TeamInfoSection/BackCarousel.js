import React from 'react'

import {
  InfoText
} from './TeamInfo.elements'

const BackCarousel = ({description}) => {
  return (
    <>
      <InfoText>
        {description}
      </InfoText>
    </>
  )
}

export default BackCarousel
