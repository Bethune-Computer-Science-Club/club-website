import { Container } from '../../globalStyles'

import { Fade } from 'react-awesome-reveal'

//Styled Components
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  Heading,
  Slide
} from './DoubleSlides.elements'

const DoubleSlides = ({ slide1 = "", slide1title = "", slide2 = "", slide2title = ""}) => {

  return (
    <InfoSec>
      <Container> 
        <InfoRow>
          <InfoColumn>
            <Fade direction='left'>
              <Heading>{slide1title}</Heading>
              {(slide1 !== "") ? 
                <Slide title={slide1title} src={slide1} frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></Slide>
               : <></>}
            </Fade>
          </InfoColumn>
          <InfoColumn>
            <Fade direction='right'>
              <Heading>{slide2title}</Heading>
              {(slide2 !== "") ? 
                <Slide title={slide2title} src={slide2} frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></Slide>
               : <></>}
            </Fade>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default DoubleSlides