import { Container } from '../../globalStyles'
//Images
import pythonLogo from '../../images/pythonLogo.png'
import cppLogo from '../../images/cppLogo.png'
import javaLogo from '../../images/javaLogo.png'
import titleBar from '../../images/titleBar.png'

import { Fade } from 'react-awesome-reveal'

//Styled Components
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subheading,
  WelcomeCode,
  Img
} from './HomeStart.elements'

const HomeStart = () => {

  return (
    <InfoSec style={{ backgroundImage: `url(${titleBar})` }}>
      <Container>
        <InfoRow>
          <InfoColumn>
            <Fade direction='left'>
              <TextWrapper>
                <Heading >Welcome!</Heading>
                <Subheading>Meetings every other Monday at Lunch</Subheading>
              </TextWrapper>
            </Fade>
          </InfoColumn>
          
          <InfoColumn>
            <Fade direction='right'>
              <TextWrapper>
                <WelcomeCode>
                  print(“Welcome!”)
                  <Img src={pythonLogo}></Img>
                </WelcomeCode>
                <WelcomeCode>
                  cout &lt;&lt; “Welcome!”; {/*You cant print "<<" in html so you need to use &lt; instead */}
                  <Img src={cppLogo}></Img>
                </WelcomeCode>
                <WelcomeCode>
                  System.out.println(“Welcome!”);
                  <Img src={javaLogo}></Img>
                </WelcomeCode>
              </TextWrapper>
            </Fade>
          </InfoColumn>
          
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default HomeStart

