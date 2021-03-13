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


const InfoSection = ({ lightBg, imgStart, lightTopLine, lightTextDesc, description, headline, lightText, topLine, img, alt, start }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <Heading lightText={lightText}>{headline}</Heading>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TextHeading lightTopLine={lightTopLine}>{topLine}</TextHeading>
                <MainText lightTextDesc={lightTextDesc}>{description}</MainText>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection

