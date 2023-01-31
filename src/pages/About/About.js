import React from 'react'
import { aboutTeam } from './Data'
import { InfoSection, AboutStart, Categories } from '../../components'

const Home = () => {
  return (
    <>
      <AboutStart />
      <InfoSection {...aboutTeam} />
      <Categories />
    </>
  )
}

export default Home
