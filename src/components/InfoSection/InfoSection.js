import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'
import { Calendar } from '../../components'

// placeholder image
import CCCLogo from '../../images/cccLogo.png'

//Styled Components
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TextHeading,
  Heading,
  MainText,
  Img
} from './InfoSection.elements'
//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

// Features:
//  - Can ignore certain parameters (i.e. ignoring image allows a placeholder image, ignoring description removes it)
//  - Can render a React component in the description
const InfoSection = ({ imgStart = true, description = "", headline = "", topLine = "", img = CCCLogo, alt = "No alt specified. Might be placeholder.", showIframe = false, showSchedule = false }) => {
  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <InfoSec>
      <Container>

        {(headline !== "") ? <Heading>{headline}</Heading> : <></>}

        <InfoRow imgStart={imgStart}>
          <InfoColumn data-aos='fade-left'>
            {showSchedule ? <iframe title="Schedule" src="https://docs.google.com/document/d/e/2PACX-1vQv81P3gR8B6YcrvXmoIafzlx4fEeNjgkAEBFcw_sP3gkNRBlvU7LAIgcTTLIujToPpYcu1eIlmZP-Q/pub?embedded=true" style={{ border: 0, margin: 0 }} width="100%" height="600"></iframe> :
              <TextWrapper>
                {topLine !== "" ? <TextHeading>{topLine}</TextHeading> : <></>}
                {
                  // check if description will be ignored
                  (description !== "") ?
                    // check if description is a react component or a string
                    (typeof (description) === "string") ?
                      <MainText>{description}</MainText>
                      : <>{description}</>
                    : <></>
                }
              </TextWrapper>
            }
          </InfoColumn>
          <InfoColumn data-aos='fade-right'>
            {showIframe ? <Calendar/> :
              <Img src={img} alt={alt} />}
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default InfoSection

