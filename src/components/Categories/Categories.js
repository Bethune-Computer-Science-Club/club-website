import React from 'react'
import { Container } from '../../globalStyles'
import {
  InfoSec,
  InfoRow1,
  InfoRow2,
  Heading,
  LinkImg,
  LinkText
} from './Categories.elements'
import roboticsPicture from '../../images/robotics.jpg'
import applicationsPicture from '../../images/applications.png'
import gamesPicture from '../../images/gaming.jpg'
import miscellaneousPicture from '../../images/miscellaneous.jpg'

const InfoSection = () => {
  return (
    <>
      <InfoSec>
        <Container>
          <Heading>Categories</Heading>
          <InfoRow1>
            <LinkImg to='/' style={{backgroundImage: `url(${roboticsPicture})`}}>
              <LinkText>Robotics</LinkText>
            </LinkImg>
            <LinkImg to='/' style={{backgroundImage: `url(${applicationsPicture})`}}>
              <LinkText>Applications</LinkText>
            </LinkImg>
          </InfoRow1>

          <InfoRow2>
            <LinkImg to='/' style={{backgroundImage: `url(${gamesPicture})`}}>
              <LinkText style={{color: '#fff'}}>Games</LinkText>
            </LinkImg>
            <LinkImg to='/' style={{backgroundImage: `url(${miscellaneousPicture})`}}>
              <LinkText style={{color: '#fff'}}>Miscellaneous</LinkText>
            </LinkImg>
          </InfoRow2>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection

