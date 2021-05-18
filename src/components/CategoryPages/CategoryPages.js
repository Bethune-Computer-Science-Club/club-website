import React, { useEffect, useState } from 'react'
import { Container } from '../../globalStyles'
import { InfoSec } from '../InfoSection/InfoSection.elements'
import {
  CenteredLargeText,
  BuildProjects,
} from './CategoryPages.elements'
import { StartingSection } from '../../components'
//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'
import Axios from 'axios'

const CategoryPages = ({ BannerInfo, projectType }) => {
  const [projects, setProjects] = useState(); //stores the projects for the defined category
  useEffect(() => {
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true});
      
    //Get data from database
    Axios.get('http://localhost:5000/projects/').then((response) => {
      setProjects(response.data.filter(project => project.projectType === projectType));
    })
    .catch(err => {
      console.log(err);
    })
  }, [projectType]);

    console.log(projects);

  return (
    <>
      <StartingSection {...BannerInfo}></StartingSection>

      <InfoSec>
        <Container>
            {projects.length === 0 ? <CenteredLargeText> There are currently no projects. </CenteredLargeText> : <></>}

            {projects ? <BuildProjects Projects={projects} ></BuildProjects> : <></>}
        </Container>
      </InfoSec>

    </>
  )

}

export default CategoryPages