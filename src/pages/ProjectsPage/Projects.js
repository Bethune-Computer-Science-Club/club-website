import React from 'react'
import { StartingSection, Categories, SubmitAProject } from '../../components'
import { StartingSectionParameters } from './Data'
const Projects = () => {
  return (
    <>
      <StartingSection {...StartingSectionParameters} />
      <Categories />
      <SubmitAProject />
    </>
  )
}

export default Projects
