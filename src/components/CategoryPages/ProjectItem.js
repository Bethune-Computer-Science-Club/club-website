import { React, useState,useEffect } from 'react'
//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

import {
  ProjectContainer,
  ProjectTitle,
  ProjectAuthor,
  ProjectDate,
  ProjectImg,
  ProjectHighlight,
  ProjectDescription,
  ProjectInfoSecLeft,
  ProjectInfoSecRight,
} from './CategoryPages.elements'

const ProjectItem = ({ project,counter }) => {
  const { authors, createdAt, description, picture, title } = project;

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const animateEffect = counter % 2 === 0 ? 'fade-right' : 'fade-left';

  useEffect(() => {
    //Animate on Scroll
    Aos.init({ duration: 1500, once: true});
  },)

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
      <ProjectContainer onClick={handleToggle} data-aos={animateEffect}>
        <ProjectHighlight toggle={toggle}/>
        {leftSec()}
        {rightSec()}

      </ProjectContainer>
    </>
  )
}

export default ProjectItem
