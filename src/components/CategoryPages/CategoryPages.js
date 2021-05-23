import React, { useEffect, useState } from 'react'
import { Container } from '../../globalStyles'
import { InfoSec } from '../InfoSection/InfoSection.elements'
import { StartingSection } from '../../components'
import { ReadSpecificData } from '../../databaseFunctions/ReadSpecificData'

import {
  CenteredLargeText,
  BuildProjects,
} from './CategoryPages.elements'

//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

const CategoryPages = ({ BannerInfo, projectType }) => {
  const [projects, setProjects] = useState(); //stores the projects for the defined category
  useEffect(() => { //Get the announcements in the database on first render
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true});
  
    //Get data from database
    ReadSpecificData('projects', 'createdAt', 'desc', 'projectType', '==', projectType).then((document) => setProjects(document));
  }, [projectType])

    console.log(projects);

  return (
    <>
      <StartingSection {...BannerInfo}></StartingSection>

      <InfoSec>
        <Container>
            {projects && projects.length === 0 ? <CenteredLargeText> There are currently no projects. </CenteredLargeText> : <></>}

            {projects !== undefined ? <BuildProjects Projects={projects} ></BuildProjects> : <></>}
        </Container>
      </InfoSec>

    </>
  )

}

export default CategoryPages