import eventsImg from '../../images/events.png'
import cccLogo2 from '../../images/cccLogo2.png'
import uWaterlooLogo from '../../images/uWaterlooLogo.png'
import hackTheNorthLogo from '../../images/hackTheNorthLogo.png'
import hackTheNorthImg from '../../images/hackTheNorthImg.jpg'
import codeJamImg1 from '../../images/codeJamImg1.jpg'
import codeJamImg2 from '../../images/codeJamImg2.jpg'


//NOTE THAT THE DESCRIPTION TEXT MUST USE /n TO INDICATE NEW LINES
export const StartingSectionParameters = {
  headingText: 'Events',
  image: eventsImg,
  descriptionText: "This page contains ongoing and upcoming events related to computer science. We strongly encourage members to participate in these events as they are great for resume content when applying to technology related university programs!"
}

export const eventObjOne = {
  header: "Canadian Computing Competition",
  img1: cccLogo2,
  img2: uWaterlooLogo,
  textDescription: "The Canadian Computing Competition is a programming competition held in February by the University of Waterloo. Participants will have three hours to solve 5 problems.\nIn the Junior division, problems mostly test your basic knowledge of programming. \n In the Senior division, problems will involve more complex algorithms involving topics such as graph theory, dynamic programming, and string algorithms.\nThe CCC is the flagship contest for computer science students at Bethune. As such, we spend several meetings helping our members prepare for it."
}

export const eventObjTwo = {
  header: "Hack the North",
  img1: hackTheNorthLogo,
  img2: hackTheNorthImg,
  textDescription: "Hack the North is Canada’s largest hackathon. It is hosted annually in January and is designed for high school and university students.\nDuring the competition, participants have 36 hours to build a hardware or software project in a team of up to 4 people.\nDuring the 36 hours, Hack the North also provides a variety of resources such as workshops and mentors to help you complete your project and help you build your knowledge in technology related fields.\nUnfortunately, Hack the North has an application process, but if manage to get in, Hack the North offers an unforgettable project development experience!"
}

export const eventObjThree = {
  header: "Code Jam",
  img1: codeJamImg1,
  img2: codeJamImg2,
  textDescription: "Code Jam is a programming competition hosted by Google. It consists of a qualification round followed by three additional rounds, with each following round increasing in difficulty.\nThis competition is hosted internationally and is open to any age group. Code Jam takes place annually and the qualification round begins in late-march.\nThe best thing is, during the qualification round, communication between contestants is allowed, so this is a great opportunity to try your hand at competitive programming with your friends!"
  
}