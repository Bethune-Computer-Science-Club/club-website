import React from 'react'
import { teamObj } from './Data'
import {TeamInfo } from '../../components'

const Team = () => {
  return (
    <>
    <TeamInfo {...teamObj}/>
    </>
  )
}

export default Team
