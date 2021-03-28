import FrontCarousel from './FrontCarousel'
import BackCarousel from './BackCarousel'
import pikachu from '../../pages/TeamPage/execImgs/Pikachu.jpg'
import {
  Carousel,
} from './TeamInfo.elements'

const CarouselItem = ({ person, handleInfoClick }) => {

  const toggleHover = () => {
    handleInfoClick(person.id)
  }
  return (
    <Carousel onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      {person.toggleInfo ? 
        <BackCarousel description={person.description}/> : 
        <FrontCarousel name={person.name} pfimg={person.pfimg}/>
      }
    </Carousel>
  )
}

export default CarouselItem 
