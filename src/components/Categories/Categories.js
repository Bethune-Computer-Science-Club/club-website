import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'
import {
  InfoSec,
  InfoRow1,
  InfoRow2,
  Heading,
  LinkImg,
  LinkText,
} from './Categories.elements'
import roboticsPicture from '../../images/robotics.jpg'
import applicationsPicture from '../../images/applications.png'
import websitesPicture from '../../images/websites.jpg'
import gamesPicture from '../../images/gaming.jpg'
import aiPicture from '../../images/ai.jpg'
import miscellaneousPicture from '../../images/miscellaneous.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css/'

const InfoSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <InfoSec>
        <Container>
          <Heading>Categories</Heading>
          <InfoRow1>
            <LinkImg to='/' data-aos='flip-left' style={{backgroundImage: `url(${roboticsPicture})`}}>
              <LinkText>Robotics</LinkText>
            </LinkImg>
            <LinkImg to='/' data-aos='flip-left' style={{backgroundImage: `url(${applicationsPicture})`}}>
              <LinkText>Applications</LinkText>
            </LinkImg>
            <LinkImg to='/' data-aos='flip-left' style={{backgroundImage: `url(${websitesPicture})`}}>
              <LinkText>Websites</LinkText>
            </LinkImg>
          </InfoRow1>
          <InfoRow2>
            <LinkImg to='/' data-aos='flip-left' style={{backgroundImage: `url(${gamesPicture})`}}>
              <LinkText style={{color: '#fff'}}>Games</LinkText>
            </LinkImg>
            <LinkImg to='/' data-aos='flip-left' style={{backgroundImage: `url(${aiPicture})`}}>
              <LinkText style={{color: '#fff'}}>AI</LinkText>
            </LinkImg>
            <LinkImg to='/' data-aos='flip-left' style={{backgroundImage: `url(${miscellaneousPicture})`}}>
              <LinkText style={{color: '#fff'}}>Miscellaneous</LinkText>
            </LinkImg>
          </InfoRow2>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection

