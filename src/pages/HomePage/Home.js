import React from 'react'
import { homeObjTwo, homeObjThree } from './Data'
import { InfoSection, Announcements } from '../../components'
import { HomePageStartingSection } from '../../components'


const Home = () => {

  return (
    <>
      <HomePageStartingSection></HomePageStartingSection>
      <Announcements displayOnlyFirstAnnouncement={true}></Announcements>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home
