import React from 'react'
import ProjectItem from './ProjectItem'

const BuildProjects = ({ projects }) => {
  let counter = 0;

  return (
    projects.map((project) => <ProjectItem project={project} counter={counter++}/>)
  )
}

export default BuildProjects
