import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'
//Styled Components
import {
  InfoSec,
  InfoRow,
  Heading,
  LinkImg,
  LinkText,
} from './Categories.elements'
//Images
import roboticsPicture from '../../images/robotics.jpg'
import applicationsPicture from '../../images/applications.png'
import websitesPicture from '../../images/websites.jpg'
import gamesPicture from '../../images/gaming.jpg'
import aiPicture from '../../images/ai.jpg'
import miscellaneousPicture from '../../images/miscellaneous.jpg'
//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

const InfoSection = () => {
  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <InfoSec>
        <Container>
          <Heading>Categories</Heading>
          <InfoRow>
            <LinkImg to='/robotics' data-aos='flip-left' style={{backgroundImage: `url(${roboticsPicture})`}}>
              <LinkText>Robotics</LinkText>
            </LinkImg>
            <LinkImg to='/apps' data-aos='flip-left' style={{backgroundImage: `url(${applicationsPicture})`}}>
              <LinkText>Apps</LinkText>
            </LinkImg>
            <LinkImg to='/websites' data-aos='flip-left' style={{backgroundImage: `url(${websitesPicture})`}}>
              <LinkText>Websites</LinkText>
            </LinkImg>

            <LinkImg to='/games' data-aos='flip-left' style={{backgroundImage: `url(${gamesPicture})`}}>
              <LinkText>Games</LinkText>
            </LinkImg>
            <LinkImg to='/ai' data-aos='flip-left' style={{backgroundImage: `url(${aiPicture})`}}>
              <LinkText>AI</LinkText>
            </LinkImg>
            <LinkImg to='/other' data-aos='flip-left' style={{backgroundImage: `url(${miscellaneousPicture})`}}>
              <LinkText>Other</LinkText>
            </LinkImg>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection

