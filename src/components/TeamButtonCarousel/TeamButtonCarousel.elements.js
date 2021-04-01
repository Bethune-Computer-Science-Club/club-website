import styled from 'styled-components'
import Slider from "react-slick"

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 30px;
  line-height: 1.1;
  color: ${({theme}) => theme.textColor};
  transition: all 0.5s ease;


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
  transition: all 0.5s ease;
`

export const CardContainer = styled.div`
  height: 345px;
  margin: 0 auto;
`

export const CardWrapper = styled.div`
  height: 300px;
  width: 300px;
  margin: 18px auto;
  border-radius: 40px;
`

export const Card = styled.div`
  background-color: #cccccc;
  height: 300px;
  width: 300px;
  border-radius: 40px;
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
  color: ${({theme}) => theme.bkgColor};
  transition: all 0.5s ease;
`

export const Role = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: ${({theme}) => theme.bkgColor};
  transition: all 0.5s ease;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  height: 280px;
  width: 280px;
`

export const Description = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: ${({theme}) => theme.bkgColor};
  transition: all 0.5s ease;
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
  z-index: 0;
  left: 0;
  top: 150px;
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