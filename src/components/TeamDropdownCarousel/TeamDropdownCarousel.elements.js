import styled from 'styled-components'
import Slider from "react-slick"

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 30px;
  line-height: 1.1;
  color: ${({theme}) => theme.textColor};
  transition: color 0.5s;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const SelectWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  color: #000;
  @media screen and (max-width: 1150px) {
    width: 90%;
  }
  @media screen and (max-width: 800px) {
    width: 300px;
  }
`

export const CarouselContainer = styled.div`
  padding: 30px 0;
  background-color: ${({theme}) => theme.bkgColor};
  transition: background-color 0.5s;
`

export const CardWrapper = styled.div`
  height: 300px;
  width: 300px;
  margin: 18px auto; //Space on the top and bottom is needed for the card animation to not be cut off
  border-radius: 40px;
`

export const Card = styled.div`
  background-color: #cccccc;
  height: 300px;
  width: 300px;
  border-radius: 40px;
  color: ${({theme}) => theme.bkgColor};
  transition: color 0.5s;
`

export const ContentContainer = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
`

export const Photo = styled.img`
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border-radius: 100%;
`

export const Name = styled.h1`
  text-align: center;
  font-size: 2rem;
`

export const Role = styled.p`
  text-align: center;
  font-size: 1.5rem;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  height: 280px;
  width: 280px;
`

export const Description = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin: auto;
`

export const RightArrow = styled.div`
  color: ${({theme}) => theme.textColor};
  position: absolute;
  cursor: pointer;
  z-index: 0;
  right: 0;
  top: 150px;
`

export const LeftArrow = styled.div`
  color: ${({theme}) => theme.textColor};
  position: absolute;
  cursor: pointer;
  z-index: 999;
  left: 0;
  top: 150px;
`

export const EmptyDisplayText = styled.h1`
  font-size: 30px;
  color: ${({theme}) => theme.textColor};
  text-align: center;
`

//Used to style the dots
export const Carousel = styled(Slider)`
  > .slick-dots li button {
    &:before {
      border-radius: 100%;
      color: ${({theme}) => theme.textColor};
    }
  }
  > .slick-dots li.slick-active button {
    &:before {
      border-radius: 100%;
      color: ${({theme}) => theme.textColor};
    }
  }
`;