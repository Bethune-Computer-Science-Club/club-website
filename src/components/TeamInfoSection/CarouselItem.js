import FrontCarousel from './FrontCarousel'
import BackCarousel from './BackCarousel'
import {
  Carousel,
  InfoIcon,
} from './TeamInfo.elements'

const CarouselItem = ({ person, handleInfoClick, }) => {
  return (
    <Carousel >
      {person.toggleInfo ? 
      <BackCarousel description={person.description}/> : 
      <FrontCarousel name={person.name} pfimg={require('../../pages/TeamPage/execImgs/' + person.pfimg)} id={person.id} handleInfoClick={handleInfoClick} />}
    </Carousel>
  )
}

export default CarouselItem 
