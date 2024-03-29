import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'

import CCCLogo from '../../images/cccLogo.png'

//Styled Components
import {
  SectionContainer,
  InfoRow,
  InfoColumn,
  HeadingContainer,
  HeadingText,
  Img,
  PageDescription
} from './StartingSection.elements'
//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

const StartingSection = ({headingText = "No heading text", image = CCCLogo, descriptionText = "No decription"}) => {
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
              <HeadingContainer>
                <HeadingText>{headingText}</HeadingText>
                {
                  typeof(image) === 'object' ?
                    <>{image}</>
                  :
                    <Img src={image}></Img>
                }
              </HeadingContainer>
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

