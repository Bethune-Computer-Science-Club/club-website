import React from 'react'
import { StartingSection, TeamCarousel, TeamDropdownCarousel } from '../../components'
import { 
  StartingSectionParameters, 
  CurrentExecParameters, 
  PastExecParameters,
  TeachersParameters, 
  WebsiteCreatorParameters } from './Data'

const Team = () => {
  return (
    <>
      <StartingSection {...StartingSectionParameters} />
      <TeamCarousel {...CurrentExecParameters}/>
      <TeamDropdownCarousel {...PastExecParameters}/>
      <TeamCarousel {...TeachersParameters}/>
      <TeamCarousel {...WebsiteCreatorParameters}/>
    </>
  )
}

export default Team
