import React from 'react'
import ProjectItem from './ProjectItem'

const BuildProjects = ({ projects }) => {
  return (
    projects.map((project) => <ProjectItem project={project}/>)
  )
}

export default BuildProjects
