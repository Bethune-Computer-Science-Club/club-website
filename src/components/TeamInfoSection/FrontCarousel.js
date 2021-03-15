import React from 'react'

import {
  CarouselImg,
  CarouselNameText,
  CarouselNameWrapper,
} from './TeamInfo.elements'

const FrontCarousel = ({name,pfimg,id,handleInfoClick}) => {
  console.log(pfimg);
  return (
    <>
      <CarouselImg src={pfimg} onClick={() => handleInfoClick(id)}/>
      <CarouselNameWrapper>
        <CarouselNameText>{name}</CarouselNameText>
      </CarouselNameWrapper>
    </>
  )
}

export default FrontCarousel
