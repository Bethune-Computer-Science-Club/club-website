import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'

//Styled Components
import {
  SectionContainer,
  InfoRow,
  InfoColumn,
  Heading,
  HeadingText,
  Img,
  PageDescription
} from './StartingSection.elements'
//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

const StartingSection = ({headingText, image, descriptionText}) => {
  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <SectionContainer>
        <Container>
          <InfoRow>
            <InfoColumn data-aos='fade-right'>
              <Heading>
                <HeadingText>{headingText}</HeadingText>
                <Img src={image}></Img>
              </Heading>
            </InfoColumn>
            <InfoColumn data-aos='fade-left'>
              <PageDescription>
                {descriptionText}
              </PageDescription>
            </InfoColumn>
          </InfoRow>
        </Container>
      </SectionContainer>
    </>
  );
};

export default StartingSection

