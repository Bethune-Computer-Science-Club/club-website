import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'

import {
  SectionContainer,
  InfoRow,
  Heading,
} from './Placeholder.elements'
import Aos from 'aos'
import 'aos/dist/aos.css/'

const StartingSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <SectionContainer>
        <Container>
          <InfoRow>
            <Heading>This page is not ready yet as the website is still in development. Sorry for the inconvenience. </Heading>
          </InfoRow>
        </Container>
      </SectionContainer>
    </>
  );
};

export default StartingSection

