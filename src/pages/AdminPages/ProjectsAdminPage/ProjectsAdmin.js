import React from 'react'
import { ProjectsAdmin, StartingSection } from '../../../components'

const ProjectsAmn = () => {
  return (
    <>
      <StartingSection {...{
        headingText: 'Edit Projects',
        descriptionText: "Choose which project category you want to edit"}} />
      <ProjectsAdmin />
    </>
  )
}

export default ProjectsAmn
