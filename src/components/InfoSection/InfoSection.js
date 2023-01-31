import { Container } from '../../globalStyles'

import { Fade } from 'react-awesome-reveal'

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

// Features:
//  - Can ignore certain parameters (i.e. ignoring image allows a placeholder image, ignoring description removes it)
//  - Can render a React component in the description
// Note 20230130: pass in an element for description to render 
// https://www.developerway.com/posts/react-component-as-prop-the-right-way
const InfoSection = ({ imgStart = true, description = "", headline = "", topLine = "", img = "", alt = "Placeholder", showSchedule = false, fontSize = 15}) => {

  return (
    <InfoSec>
      <Container>
        {(headline !== "") ? <Heading>{headline}</Heading> : <></>}
 
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <Fade direction={imgStart ? 'right' : 'left'}>
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
            </Fade>
          </InfoColumn>
          <InfoColumn>
            <Fade direction={imgStart ? 'left' : 'right'}>
              {showSchedule ? <iframe title="Schedule" src="https://docs.google.com/document/d/e/2PACX-1vTX4KQwbbDP6qpAb_VF7kYN7pyV6QCbpp_KKT8b2-Vs6riirSwZslRl0EswFrtOQI7v8wTYfp98lrpl/pub?embedded=true" style={{border: 0, margin: '5px 0 0 0'}} width="100%" height="742"></iframe> : 
                <Img src={img} alt={alt} />
              }
            </Fade>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default InfoSection