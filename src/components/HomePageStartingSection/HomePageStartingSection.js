import React, { useEffect } from 'react'
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
import Aos from 'aos'
import 'aos/dist/aos.css/'

const HomePageStartingSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>
            <InfoColumn data-aos='fade-right'>
              <TextWrapper>
                <Heading >Welcome!</Heading>
                <Subheading>Meetings every Thursday @1 PM & 3:30 PM</Subheading>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn data-aos='fade-left'>
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

