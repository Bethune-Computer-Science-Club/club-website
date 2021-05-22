import React from 'react'
import {
  ProjectContainer,
  ProjectTitle,
  ProjectAuthor,
  ProjectDate,
  ProjectImg,
  ProjectInfoSecLeft,
  ProjectInfoSecRight,
  ProjectHighlight,
} from './CategoryPages.elements'

const ProjectItem = ({ project }) => {
  const { authors, createdAt, description, picture, title } = project;

  // format data
  let date, dateWithCommas;
  date = createdAt.toDate().toDateString().substring(4, 15);
  dateWithCommas = date.substring(0, 6) + ',' + date.substring(6, 11);

  return (
    <>
      <ProjectContainer>
        <ProjectHighlight />
        <ProjectInfoSecLeft>
          <ProjectTitle>
            {title}
          </ProjectTitle>
          <ProjectAuthor>
            {authors}
          </ProjectAuthor>
          <ProjectDate>
            {dateWithCommas}
          </ProjectDate>
        </ProjectInfoSecLeft>

        <ProjectInfoSecRight>
          <ProjectImg src={picture} />
        </ ProjectInfoSecRight>

      </ProjectContainer>
    </>
  )
}

export default ProjectItem
