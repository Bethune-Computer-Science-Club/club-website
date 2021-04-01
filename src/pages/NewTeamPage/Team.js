import React from 'react'
import { StartingSection, TeamCarousel, TeamButtonCarousel } from '../../components'
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
      <TeamButtonCarousel {...PastExecParameters}/>
      <TeamCarousel {...TeachersParameters}/>
      <TeamCarousel {...WebsiteCreatorParameters}/>
    </>
  )
}

export default Team
