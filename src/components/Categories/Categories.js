import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'
import {
  InfoSec,
  InfoRow,
  Heading,
  LinkImg,
  LinkText
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
          <InfoRow>
            <LinkImg to='/' data-aos='fade-right' style={{backgroundImage: `url(${roboticsPicture})`}}>
              <LinkText>Robotics</LinkText>
            </LinkImg>
            <LinkImg to='/' data-aos='fade-down' style={{backgroundImage: `url(${applicationsPicture})`}}>
              <LinkText>Applications</LinkText>
            </LinkImg>
            <LinkImg to='/' data-aos='fade-left' style={{backgroundImage: `url(${websitesPicture})`}}>
              <LinkText>Websites</LinkText>
            </LinkImg>

            <LinkImg to='/' data-aos='fade-right' style={{backgroundImage: `url(${gamesPicture})`}}>
              <LinkText style={{color: '#fff'}}>Games</LinkText>
            </LinkImg>
            <LinkImg to='/' data-aos='fade-up' style={{backgroundImage: `url(${aiPicture})`}}>
              <LinkText style={{color: '#fff'}}>AI</LinkText>
            </LinkImg>
            <LinkImg to='/' data-aos='fade-left' style={{backgroundImage: `url(${miscellaneousPicture})`}}>
              <LinkText style={{color: '#fff'}}>Miscellaneous</LinkText>
            </LinkImg>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection

