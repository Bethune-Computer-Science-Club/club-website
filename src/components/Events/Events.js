import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  ImgWrapper,
  Img,
  MoreInfoLink
} from './Events.elements'

import Aos from 'aos'
import 'aos/dist/aos.css/'

const EventsSection = ({imgStart, header, img1, img2, textDescription, moreInfoLink}) => {
  useEffect(() => {
    Aos.init({ offset: 50, duration: 1000, once: true});
  }, []);

  const newStr = textDescription.split('\n').map(str => <p>{str}<br></br><br></br></p>); //Splits the string into new lines

  return (
    <>
      <InfoSec>
        <Container>
          <Heading>{header}</Heading>
          <InfoRow imgStart={imgStart}>
            <InfoColumn data-aos='fade-right'>
              <TextWrapper>{newStr}</TextWrapper>
            </InfoColumn>
            <InfoColumn data-aos='fade-left'>
              <ImgWrapper>
                <Img src={img1}/>
              </ImgWrapper>
              <ImgWrapper>
                <Img src={img2}/>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
          <MoreInfoLink href={moreInfoLink} target="_blank" rel="noreferrer">More Info &gt;</MoreInfoLink>
        </Container>
      </InfoSec>
    </>
  );
};

export default EventsSection

