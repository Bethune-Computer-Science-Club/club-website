import { React, useState } from 'react'
import {
  ProjectContainer,
  ProjectTitle,
  ProjectAuthor,
  ProjectDate,
  ProjectImg,
  ProjectInfoSec,
  ProjectImgSec,
  ProjectHighlight,
  ProjectDescription,
} from './CategoryPages.elements'

const ProjectItem = ({ project }) => {
  const { authors, createdAt, description, picture, title } = project;

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  // format data
  let date, dateWithCommas;
  date = createdAt.toDate().toDateString().substring(4, 15);
  dateWithCommas = date.substring(0, 6) + ',' + date.substring(6, 11);

  const headerInfo = () => {
    return (
      <ProjectInfoSec>
        <ProjectTitle>
          {title}
        </ProjectTitle>
        <ProjectAuthor>
          {authors}
        </ProjectAuthor>
        <ProjectDate>
          {dateWithCommas}
        </ProjectDate>
      </ProjectInfoSec>
    )
  }

  const descriptionInfo = () => {
    return (
      <ProjectInfoSec>
        <ProjectDescription>
          {description}
        </ProjectDescription>
      </ProjectInfoSec>
    )
  }

  const image = () => {
    return (
      <ProjectImgSec toggle={toggle}>
        <ProjectImg src={picture} />
      </ ProjectImgSec>
    )
  }

  const toggleInfo = () => {
    // if toggle is true, have image on the left else on the right

    if (toggle) {
      return descriptionInfo()
    }else {
      return headerInfo()
    }
  }

  return (
    <>
      <ProjectContainer onClick={handleToggle}>
        <ProjectHighlight />
        {toggle ?
          image() : toggleInfo()
        }
        {toggle ?
          toggleInfo() : image()
        }

      </ProjectContainer>
    </>
  )
}

export default ProjectItem
