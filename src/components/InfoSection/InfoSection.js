import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
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


const InfoSection = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topLine, img, alt, start }) => {
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
                {/* <Link to='/sign-up'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link> */}
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

