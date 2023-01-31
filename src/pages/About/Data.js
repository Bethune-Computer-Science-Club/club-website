//Images
import yearbookPicture from '../../images/yearbook.png'

function AboutDesc() {
  return (
    <p>
    The Computer Science Club is led by a dedicated team of 15 executives: Bay, Beatrice, Dilaany, Drake, Eric, Evan, Jefferey, Kathleen, Lin, Luthira, Richard, Ryan, Tim, William, and Wilson. Our staff supervisors are Mr. Loo, Mr. Lu, and Mr. Lai. Two names pronounced the same - not confusing at all! This year, we're finally back in person. This is our yearbook picture, including general members as well!
    </p>
  )
}

export const aboutTeam = {
  imgStart: false, 
  description: <AboutDesc />, 
  headline: 'Team', 
  topLine: '',
  img: yearbookPicture,
  alt: 'Image',
  showIframe: false,
  showSchedule: false
}