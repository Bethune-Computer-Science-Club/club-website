import React from 'react'
import { Container } from '../../globalStyles'
import pythonLogo from '../../images/pythonLogo.png'
import cppLogo from '../../images/cppLogo.png'
import javaLogo from '../../images/javaLogo.png'

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subheading,
  WelcomeCode,
  Img
} from './HomePageStartingSection.elements'


const HomePageStartingSection = () => {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <Heading >Welcome!</Heading>
                <Subheading>Meetings every Sunday @ 4:20 AM</Subheading>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <TextWrapper>
                <WelcomeCode>
                  print(“Welcome!”)
                  <Img src={pythonLogo}></Img>
                </WelcomeCode>
                <WelcomeCode>
                  cout &lt;&lt; “Welcome!”; {/*You cant print "<<" in html so you need to use &lt; instead */}
                  <Img src={cppLogo}></Img>
                </WelcomeCode>
                <WelcomeCode>
                  System.out.println(“Welcome!”);
                  <Img src={javaLogo}></Img>
                </WelcomeCode>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default HomePageStartingSection

