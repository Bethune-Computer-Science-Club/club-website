import React from 'react'
import { exec20_21,exec19_20 } from './Data'
import { TeamInfo } from '../../components'

const Team = () => {
  return (
    <>
    <TeamInfo {...exec20_21}/>
    <TeamInfo {...exec19_20}/>
    </>
  )
}

export default Team
