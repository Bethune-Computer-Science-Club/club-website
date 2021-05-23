import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
// import {animated, useTransition} from 'react-spring'

import styled from 'styled-components'

import { Container } from '../../globalStyles'

//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

import CCCLogo from '../../images/cccLogo.png'

import {
  InfoRow,
  InfoColumn,
  Img,
  InfoSec,
  Heading,
  MainText
} from '../InfoSection/InfoSection.elements'

export const PageLink = styled(Link)`
`

export const DynamicHeightUpdater = ({height}) => {
  console.log("height", height)

  return(<>
  
  </>)
}

// These items will inherit their properties from their respective parents. Add a new property to overide inherited properties.
export const BigText = styled(Heading)`
  margin-bottom: 0;
`

export const Text = styled(MainText)`
  margin-bottom: 0;
`

export const HorizontalFlexbox = styled(InfoRow)`
  margin-bottom: 30px;
`

export const Item = styled(InfoColumn)`
`

export const Image = styled(Img)`
`

export const Background = styled(InfoSec)`
`

// Just a restyling of InfoSection. More restrictive in its use. Changes in InfoSection will also be reflected here.
export const AnnouncementSection =  ({title = "No title.", description = "No description.", picture = CCCLogo, date = "No date."}) => {

  // const [transitionAnimation, setAnimation] = useState(true);
  // console.log("AnnouncementSection", title, description, picture, date)
  // console.log("AnnouncementSection", picture)

  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  // Setup react-spring (it doesnt work; but it might work later on if the was the data is handled changes)
  // const leaveAndExit = useTransition(transitionAnimation, {
  //   from: {x: "-50vw"},
  //   enter: {x: "0vw"},
  //   leave: {x: "-50vw"},
  //   config: { duration: 1000}
  // })

  return(<>
 
         {/* use AOS */}
        <Container data-aos="fade-left">

          <HorizontalFlexbox>

            <Item>
              <Image src={picture}></Image>
            </Item>

            <Item>
              <Text style={{fontSize: "25px"}}>
                {title}
              </Text>
              <Text>
                {date}
              </Text>
              <Text>
                {description}
              </Text>
            </Item>

          </HorizontalFlexbox>

        </Container>
        
    
  </>)

}

//use react-spring (doesnt work properly, exit animation doesnt work)
        // leaveAndExit((style, useAnimation) =>
        
        //   (useAnimation) ? 
        //     <animated.div style={style}>
        //       <Container data-aos="fade-left">

        //         <HorizontalFlexbox>

        //           <Item>
        //             <Image src={picture}></Image>
        //           </Item>

        //           <Item>
        //             <Text style={{fontSize: "25px"}}>
        //               {title}
        //             </Text>
        //             <Text>
        //               {date}
        //             </Text>
        //             <Text>
        //               {description}
        //             </Text>
        //           </Item>

        //         </HorizontalFlexbox>

        //       </Container>
        //     </animated.div>
        //   :
        //     <></>
        // )}