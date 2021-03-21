//Images
import cccLogoEdited from '../../images/cccLogoEdited.png'

import schoolPicture from '../../images/schoolPicture.jpg'

//Announcements
export const homeObjOne = {
  lightBg: false, //true if bkg is white, false if blue
  imgStart: true, //true if images is in the first column. False if image is in the second column
  lightTopLine: true, 
  lightTextDesc: true, 
  description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', 
  headline: 'Announcements', 
  lightText: true, 
  topLine: 'CCC Prep Session 69',
  img: cccLogoEdited,
  alt: 'Image',
  showIframe: false,
  showSchedule: false
}

//Schedule
export const homeObjTwo = {
  lightBg: false,
  lightText: true, 

  imgStart: true, 
  headline: 'Schedule', 
  start: '',
  showIframe: true,
  showSchedule: true
}

//About Us
export const homeObjThree = {
  lightBg: false,
  imgStart: false, 
  lightTopLine: true, 
  lightTextDesc: true, 
  buttonLabel: 'Get Started', 
  description: 'We are a bunch of people who love to slack off, and sometimes code, I guess. I am now writing in random words to fill in space, because this is just an example and it doesn’t matter. Lorem ipsum dolor sit amet, ludus suscipiantur signiferumque sit in, an amet definitiones per. Ad bonorum praesent quo, in cum postea disputando. Vix ea solet animal vidisse, cu utroque splendide has. Eam an nominati voluptatibus, sed in magna exerci aperiam, ex has erant elaboraret. At wisi ferri his. Nam bonorum feugait an, vix at nostrum definitiones, sit utamur suscipit necessitatibus in. Sed duis malis alienum in. Etiam reprimique et vim, alterum fabulas placerat ea nec, luptatum forensibus voluptatibus ad vix. Et altera civibus reformidans sea, nam cu clita phaedrum rationibus, facer hendrerit vix ei. Has ad noster scaevola ponderum. Placeholder text.', 
  headline: 'About Us', 
  lightText: true, 
  topLine: '',
  img: schoolPicture,
  alt: 'Image',
  start: '',
  showIframe: false,
  showSchedule: false
}
