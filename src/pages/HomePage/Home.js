import React from 'react'
import { homeObjTwo, homeObjThree } from './Data'
import { InfoSection } from '../../components'
import { HomePageStartingSection } from '../../components'

import Announcements from '../../components/Announcements/Announcements'

const Home = () => {

  // const [height, setHeight] = useState(0)
  // const someRef = useRef()

  // useEffect(() => {
  //   setHeight(someRef.current.clientHeight)
  //   console.log("height", height)
  // }, [someRef.current])

  return (
    <>
      {/* <HomePageStartingSection ref={someRef}></HomePageStartingSection> */}
      <HomePageStartingSection></HomePageStartingSection>
      {/* <InfoSection {...homeObjOne} /> */}
      <Announcements></Announcements>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home
