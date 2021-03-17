import React from 'react'
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
  Img
} from './SubmitAProject.elements'
import submitPicture from '../../images/submitProject.jpg'

const InfoSection = () => {
  return (
    <>
      <InfoSec>
        <Container>
          <Heading>Submit A Project</Heading>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <Text>Completed a project and want it featured on the website? Great! Here’s what you’ll need to do:</Text>
                <BulletWrapper>
                  <Bullet>Write a blog-style page on your project (see example <a href="https://youtu.be/oHg5SJYRHA0" style={{color: "#fff"}}>here</a>).</Bullet>
                  <Bullet>Fill out this <a href="https://youtu.be/oHg5SJYRHA0" style={{color: "#fff"}}>Google Form</a>.</Bullet>
                </BulletWrapper>
                <Text>The club executives and/or teacher supervisors will review your submission and you will receive an email when your submission is approved.</Text>
                <Text>If your submission is not approved, you will receive an email containing a list of issues that must be resolved before your submission can be approved.</Text>
                <Text>Happy coding everyone! We hope to see this page expand with all the amazing projects you complete!</Text>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
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

