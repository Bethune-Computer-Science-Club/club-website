import React, {useState} from 'react'
import { Container } from '../../globalStyles'
import pikachuImg from '../../images/Pikachu.jpg'
import { BsArrowsAngleExpand } from 'react-icons/bs'
import { BsArrowsAngleContract } from 'react-icons/bs'

import {
  InfoSec,
  InfoIcon,
  InfoContainer,
  Heading,
  Carousel,
  CarouselImg,
  CarouselNameText,
  CarouselContainer,
  CarouselNameWrapper,
  PrevCarouseIcon,
  PrevCarouseIconWrapper,
  NextCarouseIcon,
  NextCarouseIconWrapper,
} from './TeamInfo.elements'


const TeamInfo = ({lightText}) => {

  const [infoClicked,setInfoClicked] = useState(0);

  const [info,setinfo] = useState([
    {
      name:'Simon Yang',
      role: 'exec',
      year: [(2020,2021)],
      pic: pikachuImg,
      description:"hello world",
    }
  ]);

  const handleInfoClick = () => setInfoClicked(!infoClicked);

  return (
    <>
      <InfoSec>
        <Container>
          <Heading lightText={lightText}>
            2021
          </Heading>
          <InfoContainer>
            <CarouselContainer>
              <PrevCarouseIconWrapper>
                <PrevCarouseIcon />
              </PrevCarouseIconWrapper>

              <Carousel>
                <InfoIcon onClick={handleInfoClick}>
                  {infoClicked ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
                </InfoIcon>

                <CarouselImg src={pikachuImg} alt={"pikachu"} />
                <CarouselNameWrapper>
                  <CarouselNameText>Simon Yang</CarouselNameText>
                </CarouselNameWrapper>
              </Carousel>

              <Carousel>
                <InfoIcon onClick={handleInfoClick}>
                  {infoClicked ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
                </InfoIcon>

                <CarouselImg src={pikachuImg} alt={"pikachu"} />
                <CarouselNameWrapper>
                  <CarouselNameText>Simon Yang</CarouselNameText>
                </CarouselNameWrapper>
              </Carousel>

              <Carousel>
                <InfoIcon onClick={handleInfoClick}>
                  {infoClicked ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
                </InfoIcon>

                <CarouselImg src={pikachuImg} alt={"pikachu"} />
                <CarouselNameWrapper>
                  <CarouselNameText>Simon Yang</CarouselNameText>
                </CarouselNameWrapper>
              </Carousel>
              
              <NextCarouseIconWrapper>
                <NextCarouseIcon />
              </NextCarouseIconWrapper>
            </CarouselContainer>
          </InfoContainer>
        </Container>
      </InfoSec>
    </>
  );
};

export default TeamInfo

