import { Container } from '../../globalStyles'
//Images
import titleBar from '../../images/titleBar.png'

import { Fade } from 'react-awesome-reveal'

//Styled Components
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subheading
} from './ArchivesStart.elements'

const HomeStart = () => {

  return (
    <InfoSec style={{ backgroundImage: `url(${titleBar})` }}>
      <Container>
        <InfoRow>
          <InfoColumn>
            <Fade direction='left'>
              <TextWrapper>
                <Heading >Archives</Heading>
                <Subheading>Find our past meeting materials here.</Subheading>
              </TextWrapper>
            </Fade>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default HomeStart

