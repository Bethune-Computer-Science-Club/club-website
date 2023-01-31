//Images
import schoolPicture from '../../images/schoolPicture.jpg'

import { ColoredLink } from '../../globalStyles'

function AboutDesc() {
  return (
    <p>
    The Computer Science Club is the definitive community for Bethune's computer enthusiasts! Our executive team offers engaging meetings related to computing concepts, hosts fun events like hackathons, and helps you prepare for other competitions like Waterloo's Canadian Computing Competition. Our meetings are usually in <b>room A214</b>; drop by if you're interested! Learn more about us and our team <ColoredLink to='/about'>here</ColoredLink>.
    <br /><br />
    We broadcast our announcements through Google Classroom: <b>ghtlnvg</b> (That is a lower-case L). We also have an <ColoredLink to="https://www.instagram.com/bethune_cs/">Instagram</ColoredLink> page.
    <br /><br />
    Any questions? Shoot us an email: <ColoredLink to="bcicompsciclub@gmail.com">bcicompsciclub@gmail.com</ColoredLink>
    </p>
  )
}

//About Us
export const homeAbout = {
  imgStart: false, 
  buttonLabel: 'Get Started', 
  description: <AboutDesc />, 
  headline: 'About Us', 
  topLine: '',
  img: schoolPicture,
  alt: 'Image',
  showIframe: false,
  showSchedule: false
}

function EventsDesc() {
  return (
    <p>
    Here is a list of our activities during the 2022-2023 school year, including what we've done so far and what we're planning.
    <br /><br />
    To see our past meeting slides, visit the <ColoredLink to='/archives'>Archives</ColoredLink> page.
    </p>
  )
}

//Schedule
export const homeEvents = {
  imgStart: false, 
  description: <EventsDesc />,
  headline: 'Events', 
  showIframe: false,
  showSchedule: true
}