import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'

import {
  SectionContainer,
  InfoRow,
  InfoColumn,
  Heading,
  Img,
  PageDescription
} from './StartingSection.elements'
import Aos from 'aos'
import 'aos/dist/aos.css/'

const StartingSection = ({headingText, image, descriptionText}) => {
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
                {headingText}
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

