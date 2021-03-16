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
import gamesPicture from '../../images/gaming.jpg'
import miscellaneousPicture from '../../images/miscellaneous.jpg'

const InfoSection = () => {
  return (
    <>
      <InfoSec>
        <Container>
          <Heading>Categories</Heading>
          <InfoRow>
          <LinkImg style={{background: 'roboticsPicture'}}>
              <LinkText to='/'>Robotics</LinkText>
            </LinkImg>
            <LinkImg style={{background: 'roboticsPicture'}}>
              <LinkText to='/'>Applications</LinkText>
            </LinkImg>
            <LinkImg style={{background: roboticsPicture}}>
              <LinkText to='/'>Games</LinkText>
            </LinkImg>
            <LinkImg style={{background: roboticsPicture}}>
              <LinkText to='/'>Miscellaneous</LinkText>
            </LinkImg>

          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection

