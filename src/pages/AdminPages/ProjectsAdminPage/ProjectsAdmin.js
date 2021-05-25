import React from 'react'
import { ProjectsAdmin, StartingSection } from '../../../components'
import Admin from '../../../images/admin.png'

const ProjectsAmn = () => {
  return (
    <>
      <StartingSection {...{
        headingText: 'Edit Projects',
        image: Admin,
        descriptionText: "Choose which project category you want to edit"}} />
      <ProjectsAdmin />
    </>
  )
}

export default ProjectsAmn
