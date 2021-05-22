import { React, useState } from 'react'

import {
  ProjectContainer,
  ProjectTitle,
  ProjectAuthor,
  ProjectDate,
  ProjectImg,
  ProjectImgSec,
  ProjectHighlight,
  ProjectDescription,
  ProjectInfoSecLeft,
  ProjectInfoSecRight,
} from './CategoryPages.elements'

const ProjectItem = ({ project }) => {
  const { authors, createdAt, description, picture, title } = project;

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  // format data
  let date, dateWithCommas;
  date = createdAt.toDate().toDateString().substring(4, 15);
  dateWithCommas = date.substring(0, 6) + ',' + date.substring(6, 11);

  const leftSec = () => {
    return (
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
    )
  }

  const descriptionInfo = () => {
    return (
      <ProjectDescription>
        {description}
      </ProjectDescription>
    )
  }

  const image = () => {
    return (
      <ProjectImg src={picture} toggle={toggle}/>
    )
  }

  const rightSec = () => {
    return (
      <ProjectInfoSecRight>
        {descriptionInfo()}
        {image()}
      </ProjectInfoSecRight>
    )
  }

  return (
    <>
      <ProjectContainer onClick={handleToggle}>
        <ProjectHighlight />
        {leftSec()}
        {rightSec()}

      </ProjectContainer>
    </>
  )
}

export default ProjectItem
