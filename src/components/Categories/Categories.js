import React from 'react'
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

const InfoSection = () => {
  return (
    <>
      <InfoSec>
        <Container>
          <Heading>Categories</Heading>
          <InfoRow>
            <LinkImg to='/' style={{backgroundImage: `url(${roboticsPicture})`}}>
              <LinkText>Robotics</LinkText>
            </LinkImg>
            <LinkImg to='/' style={{backgroundImage: `url(${applicationsPicture})`}}>
              <LinkText>Applications</LinkText>
            </LinkImg>
            <LinkImg to='/' style={{backgroundImage: `url(${websitesPicture})`}}>
              <LinkText>Websites</LinkText>
            </LinkImg>

            <LinkImg to='/' style={{backgroundImage: `url(${gamesPicture})`}}>
              <LinkText style={{color: '#fff'}}>Games</LinkText>
            </LinkImg>
            <LinkImg to='/' style={{backgroundImage: `url(${aiPicture})`}}>
              <LinkText style={{color: '#fff'}}>AI</LinkText>
            </LinkImg>
            <LinkImg to='/' style={{backgroundImage: `url(${miscellaneousPicture})`}}>
              <LinkText style={{color: '#fff'}}>Miscellaneous</LinkText>
            </LinkImg>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection

