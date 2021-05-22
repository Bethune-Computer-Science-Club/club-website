import {  
  ItemClipper,
  UpperDonut,
  LowerDonut,
  Checkmark,
  ModdedAnimatedText,
  Grid,
  GridOverlapper
} from "./LoadingCircle.elements"
//import { useSpring } from 'react-spring'

import React, {useEffect, useState} from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css/'

import CheckmarkImage from '../../images/checkmark.png'

// This is made by using 2 circles, each with 1 half green and 1 half red.
// Then, half of the circle is cropped/clipped to hide the other side, 
// and the green side rotates to replace the red side.

const LoadingCircle = ({skillName = "", useCheckmark = true}) => {

  const [showCheckmarks, toggleCheckmarks] = useState(false);

  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      (useCheckmark === true) ? 
        toggleCheckmarks(true)
      :
        toggleCheckmarks(false)
    }, 1700)
  })
  
  return (
    <>
      <Grid>
          <GridOverlapper data-aos="flip-up">
            {/* <UpperDonut></UpperDonut>
            <LowerDonut></LowerDonut> */}
            <ItemClipper>
              <UpperDonut></UpperDonut>
            </ItemClipper>
            <ItemClipper>
              <LowerDonut></LowerDonut>
            </ItemClipper>
          </GridOverlapper>
          {
            showCheckmarks ?
              <GridOverlapper>
                <div data-aos="zoom-in">
                  <Checkmark src={CheckmarkImage}></Checkmark>
                </div>
              </GridOverlapper>
            : 
              <></>
          }
          {        
            (skillName !== "")?
              <ModdedAnimatedText> {skillName} </ModdedAnimatedText>
            : 
              <></>
          }
      </Grid>
    </>
  )

}

export default LoadingCircle

  // const fillAnimation = useSpring({
  //   to: {

  //     background: 
  //     `radial-gradient(#202033 50%,transparent 0%),
  //     conic-gradient(
  //         #2ec02e 1deg, 
  //         #d12a2a 0 360deg 
  //     )`
  
  //   },
  
  //   from: {
  
  //     background: 
  //     `radial-gradient(#202033 50%,transparent 0%),
  //     conic-gradient(
  //         #2ec02e 359deg, 
  //         #d12a2a 0 360deg 
  //     )`
  
  //   },
  
  //   config: { duration: 1000 },
  //   delay: 1000,
  // })