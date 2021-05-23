import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'
import { InfoSection } from '../../components'
import { HomePageStartingSection } from '../../components'

import Announcements from '../../components/Announcements/Announcements'

const Home = () => {
  return (
    <>
      <HomePageStartingSection />
      {/* <InfoSection {...homeObjOne} /> */}
      <Announcements></Announcements>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home
