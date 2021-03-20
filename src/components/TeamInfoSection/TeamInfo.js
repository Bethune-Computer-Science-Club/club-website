import React, { useState } from 'react'
import { Container } from '../../globalStyles'
import CarouselItem from './CarouselItem'

import {
  InfoSec,
  InfoContainer,
  Heading,
  CarouselContainer,
  PrevCarouselIcon,
  PrevCarouselIconWrapper,
  NextCarouselIconWrapper,
  NextCarouselIcon,
} from './TeamInfo.elements'

const execs = require('../../pages/TeamPage/execs.json').execs;

for (let exec of execs) {
  // add toggleInfo for extra info for each carousel
  exec.toggleInfo = false;

  // adding id to each exec
  exec.id = Math.floor(Math.random() * 10000000000) + 1
}

const TeamInfo = ({ lightText, year }) => {

  // number of slides is set to 3

  const [infos, setinfo] = useState(execs);
  const [currentSlide, setSlide] = useState(1);

  const handleInfoClick = (id) => {
    setinfo(infos.map((person) =>
      person.id === id ? { ...person, toggleInfo: !person.toggleInfo } : person
    ));
  }

  const prevSlide = () => {
    if (currentSlide - 1 < 1) {
      setSlide(infos.length);
    }else{
      setSlide(currentSlide-1);
    }
  }

  const nextSlide = () => {
    if (currentSlide + 1 > infos.length) {
      setSlide(1);
    }else{
      setSlide(currentSlide+1);
    }
  }
  
  const renderExecList = () => {
    let execList = [];
    let current = currentSlide-1;
    for (let i=0;i<3;i++) {
      if (current >= infos.length) {
        current = 0;
      }
      console.log(current);
      execList.push(infos[current]);
      current ++;
    }

    return execList;
  }

  const execList = renderExecList();
  console.log(currentSlide);

  return (
    <>
      <InfoSec>
        <Container>
          <Heading lightText={lightText}>
            {year}
          </Heading>
          <InfoContainer>
            <CarouselContainer>
              <PrevCarouselIconWrapper>
                <PrevCarouselIcon onClick={prevSlide}/>
              </PrevCarouselIconWrapper>

              { 
                execList.map((person) =>
                <CarouselItem key={person.id} person={person} handleInfoClick={handleInfoClick} />
              )}

              <NextCarouselIconWrapper>
                <NextCarouselIcon onClick={nextSlide}/>
              </NextCarouselIconWrapper>

            </CarouselContainer>
          </InfoContainer>
        </Container>
      </InfoSec>
    </>
  );
};

export default TeamInfo

