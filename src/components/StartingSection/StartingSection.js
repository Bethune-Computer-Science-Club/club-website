import React from 'react'
import { Container } from '../../globalStyles'
import projectsPic from '../../images/projects.png'

import {
  SectionContainer,
  InfoRow,
  InfoColumn,
  Heading,
  Img,
  PageDescription
} from './StartingSection.elements'


const StartingSection = ({headingText, image, descriptionText}) => {
  return (
    <>
      <SectionContainer>
        <Container>
          <InfoRow>
            <InfoColumn>
              <Heading>
                {headingText}
                <Img src={image}></Img>
              </Heading>
            </InfoColumn>
            <InfoColumn>
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

