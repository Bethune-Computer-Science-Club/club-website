import React from 'react'
import { homeAbout, homeEvents } from './Data'
import { InfoSection, HomeStart } from '../../components'

const Home = () => {
  return (
    <>
      <HomeStart />
      <InfoSection {...homeAbout} />
      <InfoSection {...homeEvents} />
    </>
  )
}

export default Home
