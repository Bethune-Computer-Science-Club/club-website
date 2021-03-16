import React from 'react'
import { Container } from '../../globalStyles'
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TextHeading,
  Heading,
  MainText,
  ImgWrapper,
  Img
} from './InfoSection.elements'


const InfoSection = ({ lightBg, imgStart, lightTopLine, lightTextDesc, description, headline, lightText, topLine, img, alt, start, showIframe, showSchedule }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <Heading lightText={lightText}>{headline}</Heading>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              {showSchedule ? <iframe src="https://docs.google.com/document/d/1_j23KMOUhr1gflVnDa_62n6oxco87z5MBKhjQC13KtI/edit?usp=sharing/pub?embedded=true" style={{border: 0}} width="100%" height="600" frameborder="0" scrolling="no"></iframe> : 
                <TextWrapper>
                  <TextHeading lightTopLine={lightTopLine}>{topLine}</TextHeading>
                  <MainText lightTextDesc={lightTextDesc}>{description}</MainText>
                </TextWrapper>
              }
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                {showIframe ? <iframe src="https://calendar.google.com/calendar/embed?src=c_classroomefe39fd5%40group.calendar.google.com&ctz=America%2FToronto" style={{border: 0}} width="100%" height="600" frameborder="0" scrolling="no"></iframe> : <Img src={img} alt={alt} />}
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection

