import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'
//Styled Components
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
//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

const EventsSection = ({imgStart, header, img1, img2, textDescription, moreInfoLink}) => {
  //Animate on Scroll
  useEffect(() => {
    Aos.init({ offset: 50, duration: 1000, once: true});
  }, []);

  const newStr = textDescription.split('\n').map(str => <p>{str}<br></br><br></br></p>); //Adds new lines to the string where there is a '\n' in the Data.js file

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
          <MoreInfoLink href={moreInfoLink} target="_blank" rel="noreferrer">More info &gt;</MoreInfoLink>
        </Container>
      </InfoSec>
    </>
  );
};

export default EventsSection

