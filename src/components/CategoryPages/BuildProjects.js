import React from 'react'
import ProjectItem from './ProjectItem'

const BuildProjects = ({ projects }) => {
  console.log(projects[0]);
  return (
    // Projects.map(project => <ProjectItem {...project}> </ProjectItem>)
    projects.map(() => <ProjectItem project={projects[0]}/>)
  )
}

export default BuildProjects
