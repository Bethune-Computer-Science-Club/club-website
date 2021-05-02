import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'
import { InfoSection } from '../../components'
import { HomePageStartingSection } from '../../components'

const Home = () => {
  return (
    <>
      <HomePageStartingSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home
