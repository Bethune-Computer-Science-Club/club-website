import React, { useEffect, useState } from 'react'
import { Container } from '../../globalStyles'
import { InfoSec } from '../InfoSection/InfoSection.elements'
import { StartingSection } from '../../components'
import { ReadSpecificData } from '../../databaseFunctions/ReadSpecificData'
import BuildProjects from './BuildProjects'

import {
  CenteredLargeText,
} from './CategoryPages.elements'

//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

const CategoryPages = ({ BannerInfo, projectType }) => {
  const [projects, setProjects] = useState(); //stores the projects for the defined category
  useEffect(() => {
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true});
  
    //Get data from database
    ReadSpecificData('projects', 'createdAt', 'desc', setProjects, 'projectType', '==', projectType);
  }, [projectType])

  return (
    <>
      <StartingSection {...BannerInfo}></StartingSection>

      <InfoSec>
        <Container>
            {projects && projects.length === 0 ? <CenteredLargeText> There are currently no projects. </CenteredLargeText> : <></>}

            {projects !== undefined ? <BuildProjects projects={projects} /> : <> </> }
        </Container>
      </InfoSec>
    </>
  )

}

export default CategoryPages