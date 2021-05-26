import React from 'react'

import { InfoSection } from '../../components'
import { JoinUsObjectOne } from './Data'
import { JoinUsObjectTwo } from './Data'
import { JoinUsObjectThree } from './Data'

import { StartingSection } from '../../components'
import { StartingSectionParameters } from './Data'

const JoinUs = () => {
  return (
    <>
      <StartingSection {...StartingSectionParameters}></StartingSection>
      <InfoSection {...JoinUsObjectOne} />
      <InfoSection {...JoinUsObjectTwo} />
      <InfoSection {...JoinUsObjectThree} />
    </>
  )
}

export default JoinUs
