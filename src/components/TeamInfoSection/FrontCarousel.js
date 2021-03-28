import React from 'react'
import {
  CarouselImg,
  CarouselNameText,
  CarouselNameWrapper,
} from './TeamInfo.elements'

const FrontCarousel = ({name,pfimg}) => {
  const img = require('../../pages/TeamPage/execImgs/' + pfimg).default
  return (
    <>
      <CarouselImg src={img}/>
      <CarouselNameWrapper>
        <CarouselNameText>{name}</CarouselNameText>
      </CarouselNameWrapper>
    </>
  )
}

export default FrontCarousel
