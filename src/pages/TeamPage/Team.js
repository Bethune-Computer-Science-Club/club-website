import React from 'react'
import { exec20_21,exec19_20 } from './Data'
import { StartingSection, TeamInfo } from '../../components'
import { StartingSectionParameters } from './Data'

const Team = () => {
  return (
    <>
      <StartingSection {...StartingSectionParameters} />
      <TeamInfo {...exec20_21}/>
      <TeamInfo {...exec19_20}/>
    </>
  )
}

export default Team
