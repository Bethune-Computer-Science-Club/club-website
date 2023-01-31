import React from 'react'
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
import meetingPicture from '../../images/code.jpg'
import CCCPicture from '../../images/cemc.png'
import picoCTFPicture from '../../images/picoctf.png'
import HacksPicture from '../../images/hacks.jpg'

const Categories = () => {

  return (
    <>
      <InfoSec>
        <Container>
          <Heading>Activities</Heading>
            {/* AOS doesn't work because its old, react-awesome-reveal glitches, so theres just gonna be no animation here im too lazy to "learn" another library */}
            <InfoRow>
              <LinkImg to='/archives' style={{backgroundImage: `url(${meetingPicture})`}}>
                <LinkText>Meetings</LinkText>
              </LinkImg>
            
              <LinkImg to='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html' style={{backgroundImage: `url(${CCCPicture})`}}>
                <LinkText>CCC</LinkText>
              </LinkImg>

              <LinkImg to='https://picoctf.org/' style={{backgroundImage: `url(${picoCTFPicture})`}}>
                <LinkText>picoCTF</LinkText>
              </LinkImg>

              <LinkImg to='https://sites.google.com/student.tdsb.on.ca/bear-hacks/home' style={{backgroundImage: `url(${HacksPicture})`}}>
                <LinkText>Bear Hacks</LinkText>
              </LinkImg>
                
            </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default Categories

