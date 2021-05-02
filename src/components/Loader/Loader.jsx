// Loader (mode: "standard"): 
//  This animation takes 1.7s before loader starts to leave the screen, 
//  and finishes its animation at 2.2s.
//  Making pages load after ~2.1s-2.3s should look ok.

import React, {useState, useEffect} from 'react'
import {useTransition, animated, useSpring} from 'react-spring'

import {
  ProgressBarBase,
  CenteringDiv,
  ProgressBar,
  LoadingScreenBase,
  MainText,
  Text,
} from './LoaderElems'

import {timings} from './LoaderTimings'
import Logo from '../../images/BCSCLogo.png'

const Loader = ({mode="standard"}) => {

  const [loading, changeLoad] = useState(true)

  // Setup react-spring
  const transition = useTransition(loading, {
    from: {x: "-100vw"},
    enter: {x: "0vw"},
    leave: {x: "100vw"},
    config: { duration: timings[mode]["transition"], friction: 5 }
  })

  const barAnimation = useSpring({
    to: { width: "100%" },
    from: { width: "0%" },
    config: { duration: timings[mode]["bar-fill-time"] },
    delay: timings[mode]["transition"] + timings[mode]["clean-animation-timing"], 
  })

  // After 1.7s (transition.config.duration * 2 + barAnimation.delay + 100ms), show page
  useEffect(() => {
    setTimeout(() => {
      changeLoad(false)
    }, timings[mode]["finish-bar-load-time"] - timings[mode]["transition"])
  })

  return (

    <>

      {transition((style, item) =>
      
        item ? 

          <animated.div style={style}>  
            <LoadingScreenBase>
              
              <CenteringDiv style={{height: "100%"}}>
                <CenteringDiv style={{marginBottom: "5vh"}}>
                  <img style={{maxWidth:"150px"}} src={Logo}></img>
                  <MainText> Bethune CS Club </MainText>
                  <Text> Loading ... </Text>
                </CenteringDiv>

                <ProgressBarBase>
                  <ProgressBar style={barAnimation}></ProgressBar>
                </ProgressBarBase>
              </CenteringDiv>
              
            </LoadingScreenBase>
          </animated.div>

      : 
        <></>

      )}

    </>

  )

}

// // Loader class to wrap around TheLoader to avoid violating Rules of Hooks
// class Loader extends React.Component {

//   render() {
//       return(
//         <>
//           <TheLoader></TheLoader>
//         </>
//       )
//   }

//   // componentDidMount (){

//   //   this.timer = setInterval(() => {
//   //     // Loading screen is arriving from left side
//   //     if (this.state.delay){
//   //       setTimeout(() => {
//   //         this.setState({
//   //           delay: false
//   //         })
//   //       }, 550)
//   //     }
//   //     // Loading screen is loading (bar is filling)
//   //     else if (this.state.progress !== 50){
//   //       // this.setState({
//   //       //   progress: Math.min(50, this.state.progress + 1) // 50: prevent bar from going over the width
//   //       // })
//   //     }
//   //   }, 10)
//   // }

//   // componentWillUnmount (){
//   //   clearInterval(this.timer)
//   // }

// }

export default Loader
