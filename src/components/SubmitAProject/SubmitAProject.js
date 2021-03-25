import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Text,
  BulletWrapper,
  Bullet,
  ImgWrapper,
  Img,
  LinkText
} from './SubmitAProject.elements'
import submitPicture from '../../images/submitProject.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css/'

const InfoSection = () => {
  useEffect(() => {
    Aos.init({ offset: 50, duration: 1000 });
  }, []);
  return (
    <>
      <InfoSec>
        <Container>
          <Heading>Submit A Project</Heading>
          <InfoRow>
            <InfoColumn data-aos='fade-right'>
              <TextWrapper>
                <Text>Completed a project and want it featured on the website? Great! Here’s what you’ll need to do:</Text>
                <BulletWrapper>
                  <Bullet>Write a blog-style page on your project (see example <LinkText to='/team'>here</LinkText>).</Bullet>
                  <Bullet>Fill out this <LinkText to='/team'>Google Form</LinkText>.</Bullet>
                </BulletWrapper>
                <Text>The club executives and/or teacher supervisors will review your submission and you will receive an email when your submission is approved.</Text>
                <Text>If your submission is not approved, you will receive an email containing a list of issues that must be resolved before your submission can be approved.</Text>
                <Text>Happy coding everyone! We hope to see this page expand with all the amazing projects you complete!</Text>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn data-aos='fade-left'>
              <ImgWrapper>
                <Img src={submitPicture}/>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection

