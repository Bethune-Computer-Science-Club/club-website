import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'
import { CalendarComp } from '../../components'

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
const InfoSection = ({ imgStart = true, description = "", headline = "", topLine = "", img = "", alt = "No alt specified. Might be placeholder.", showIframe = false, showSchedule = false, fontSize = 15}) => {

  useEffect(() => { 
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true});
  }, [])

  return (
    <InfoSec>
      <Container>
        {(headline !== "") ? <Heading>{headline}</Heading> : <></>}
 
        <InfoRow imgStart={imgStart}>
          <InfoColumn data-aos='fade-left'>
            {showSchedule ? <iframe title="Schedule" src="https://docs.google.com/document/d/e/2PACX-1vTaAbLqM06FE37eYEr_U1yOigj6H1zozZIX8wuk7K9SS9krvNrVjuq6BrA0Ffh-D-oPM3nPsRWwLGpW/pub?embedded=true" style={{border: 0, margin: '5px 0 0 0'}} width="100%" height="742"></iframe> : 
              <TextWrapper>
                {topLine !== "" ? <TextHeading>{topLine}</TextHeading> : <></>}
                {
                  // check if description will be ignored
                  (description !== "") ? 
                    // check if description is a react component or a string
                    (typeof(description) === "string") ?
                      <MainText fontSize={fontSize}>{description}</MainText> 
                    : <>{description}</>
                  : <></>
                }
              </TextWrapper>
            }
          </InfoColumn>
          <InfoColumn data-aos='fade-right'>
            {showIframe ? <CalendarComp/> :
              <Img src={img} alt={alt} />}
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default InfoSection

