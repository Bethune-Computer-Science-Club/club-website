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

  const [infos, setinfo] = useState(execs);

  const handleInfoClick = (id) => {
    setinfo(infos.map((person) =>
      person.id === id ? { ...person, toggleInfo: !person.toggleInfo } : person
    ));
  }

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
                <PrevCarouselIcon />
              </PrevCarouselIconWrapper>

              {infos.map((person) => (
                <CarouselItem key={person.id} person={person} handleInfoClick={handleInfoClick} />
              ))}

              <NextCarouselIconWrapper>
                <NextCarouselIcon />
              </NextCarouselIconWrapper>
            </CarouselContainer>
          </InfoContainer>
        </Container>
      </InfoSec>
    </>
  );
};

export default TeamInfo

