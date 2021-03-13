import React from 'react'
import { Container } from '../../globalStyles'
import pikachuImg from '../../images/Pikachu.jpg'

import {
  InfoSec,
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

  function clicked() {
    console.log("prev clicked");
  }

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
                <CarouselImg src={pikachuImg} alt={"pikachu"} />
                <CarouselNameWrapper>
                  <CarouselNameText>Simon Yang</CarouselNameText>
                </CarouselNameWrapper>
              </Carousel>

              <Carousel>
                <CarouselImg src={pikachuImg} alt={"pikachu"} />
                <CarouselNameWrapper>
                  <CarouselNameText>Simon Yang</CarouselNameText>
                </CarouselNameWrapper>
              </Carousel>

              <Carousel>
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

