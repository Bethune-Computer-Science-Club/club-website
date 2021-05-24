import {useEffect} from 'react'
import { Link } from 'react-router-dom';
// import {animated, useTransition} from 'react-spring'

//import Arrows from '../Arrows/Arrows'

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


// export const ShiftHeight = keyframes`
//   0%{
//     margin-top: 1000px;
//   }
//   100%{
//     margin-top: 0px;
//   }
// `

// export const AnimationTarget = styled.div`
//   animation-name: ${ShiftHeight};
//   /* animation-duration: 2.7s; */
//   animation-duration: 0s;
//   animation-timing-function: ease-in-out;
// `

// export const DynamicArrowsHeightUpdater = ({height, showContent}) => {

//   let showAnimation = false;
//   let beforeHeight = height;
  
//   useEffect(() => {

//     setTimeout(() =>{
//       beforeHeight = height;
//     }, 2000)

//   }, [height])

//   return(<>
//     <AnimationTarget>
//       <Arrows showContent={showContent}></Arrows>
//     </AnimationTarget>
//   </>)
// }

export const MobileMargins = styled.div`
  @media screen and (max-width: 960px){
    padding: 20px;
  }
`

export const MobileFlexbox = styled(InfoColumn)`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 960px){
    flex-direction: column;
  }
`

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

export const AdaptingFlexbox = styled(HorizontalFlexbox)`
  flex-direction: row;
  padding-bottom: 15px;
  /* @media screen and (max-width: 960px){
    flex-direction: column;
  } */
  @media screen and (max-width: 960px){
    padding-bottom: 0;
  }
`

export const Item = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
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
              <AdaptingFlexbox>

                <Item>
                  <Text style={{fontSize: "25px"}}>
                    {title}
                  </Text>
                </Item>

                <Item>
                  <Text>
                    {date}
                  </Text>
                </Item>
              
              </AdaptingFlexbox>

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
