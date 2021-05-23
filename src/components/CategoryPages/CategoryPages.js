import React, { useEffect, useState } from 'react'
import { Container } from '../../globalStyles'
import { InfoSec } from '../InfoSection/InfoSection.elements'
import { StartingSection } from '../../components'
import { ReadSpecificData } from '../../databaseFunctions/ReadSpecificData'

import {
  CenteredLargeText,
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

//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

const ProjectItem = ({ project, counter }) => {
  const { authors, createdAt, description, picture, title } = project;

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const animateEffect = counter % 2 === 0 ? 'fade-right' : 'fade-left';

  useEffect(() => {
    //Animate on Scroll
    Aos.init({ duration: 1500, once: true });
  })

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
      <ProjectImg src={picture} toggle={toggle} />
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
        <ProjectHighlight toggle={toggle} />
        {leftSec()}
        {rightSec()}

      </ProjectContainer>
    </>
  )
}

const BuildProjects = ({ projects }) => {
  let counter = 0;

  return (
    projects.map((project) => <ProjectItem project={project} counter={counter++} />)
  )
}

const CategoryPages = ({ BannerInfo, projectType }) => {
  const [projects, setProjects] = useState(); //stores the projects for the defined category
  useEffect(() => {
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true });

    //Get data from database
    ReadSpecificData('projects', 'createdAt', 'desc', 'projectType', '==', projectType).then((document) => setProjects(document));
  }, [projectType])

  return (
    <>
      <StartingSection {...BannerInfo}></StartingSection>

      <InfoSec>
        <Container>
          {projects && projects.length === 0 ? <CenteredLargeText> There are currently no projects. </CenteredLargeText> : <></>}

          {projects !== undefined ? <BuildProjects projects={projects} /> : <> </>}
        </Container>
      </InfoSec>
    </>
  )

}

export default CategoryPages