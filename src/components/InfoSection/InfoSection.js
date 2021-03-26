import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'
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
import Aos from 'aos'
import 'aos/dist/aos.css/'

const InfoSection = ({ imgStart, description, headline, topLine, img, alt, showIframe, showSchedule }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true});
  }, []);

  return (
    <>
      <InfoSec>
        <Container>
          <Heading>{headline}</Heading>
          <InfoRow imgStart={imgStart}>
            <InfoColumn data-aos='fade-left'>
              {showSchedule ? <iframe title="Schedule" src="https://docs.google.com/document/d/e/2PACX-1vQv81P3gR8B6YcrvXmoIafzlx4fEeNjgkAEBFcw_sP3gkNRBlvU7LAIgcTTLIujToPpYcu1eIlmZP-Q/pub?embedded=true" style={{border: 0, margin: 0}} width="100%" height="600"></iframe> : 
                <TextWrapper>
                  {topLine !== '' ? <TextHeading>{topLine}</TextHeading> : <></>}
                  <MainText>{description}</MainText>
                </TextWrapper>
              }
            </InfoColumn>
            <InfoColumn data-aos='fade-right'>
                {showIframe ? <iframe title="Calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=Y19jbGFzc3Jvb21lZmUzOWZkNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230047a8&amp;showNav=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0" style={{border: 0}} width="100%" height="600" scrolling="no"></iframe> : 
                <Img src={img} alt={alt} />}
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection

