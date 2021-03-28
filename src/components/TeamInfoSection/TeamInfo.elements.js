import styled from 'styled-components'
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from 'react-icons/ai'

// fix background and changing background color 
export const InfoSec = styled.div`
  color: #fff;
  padding: 30px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`

export const InfoContainer = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`

// style position of text
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 40px;

  @media screen and (max-width: 760px) {
    padding-bottom: 10px;
  }
`

// text header
export const TextHeading = styled.div`
  color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 20px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`

// section header
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 30px;
  line-height: 1.1;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};

  @media screen and (max-width: 760px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`
// style text
export const MainText = styled.p`
  max-width: 500px;
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 34px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? 'a9b3c1' : '#1c2237')};
`

export const Carousel = styled.div`
  border: 5px grey solid;
  padding: 35px;
  padding-bottom: 70px;
  margin: 0px 50px;
  float: left;
  width: 225px;
  height: 250px;
  border-radius: 20%;

	&:hover {
		border: 5px green solid;
	}

`
export const CarouselContainer = styled.div`
  max-width: 2000px;
  position: relative;
  margin: auto;
`

export const CarouselImg = styled.img`
  border: 2px red solid;
  border-radius: 100%;
  width: 150px;
  max-width: 100%;
  height: 150px;
  cursor: pointer;
`

export const CarouselNameText = styled.h3`
  color: #f2f2f2;
  font-size: 18px;
`;

export const CarouselNameWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 10em;
`

export const PrevCarouselIcon = styled(AiOutlineDoubleLeft)`
  font-size: 2.3em;
  margin: 0;
  position: absolute;
  top: 50%;             
  transform: translate(0, -50%);
  cursor: pointer;
`
export const PrevCarouselIconWrapper = styled.div`
  float: left;
  height: 14.5em;
`

export const NextCarouselIcon = styled(AiOutlineDoubleRight)`
  font-size: 2.3em;
  margin: 0;
  position: absolute;
  top: 50%;             
  transform: translate(-100%, -50%);
  cursor: pointer;
`
export const NextCarouselIconWrapper = styled.div`
  float: right;
  height: 14.5em;
`

export const InfoText = styled.p`
  border: 3px red solid;
`