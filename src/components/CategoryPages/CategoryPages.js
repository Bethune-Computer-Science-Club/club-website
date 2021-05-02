import React, { useEffect } from 'react'

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

const CategoryPages = ({ BannerInfo, ProjectsInfo }) => {
  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <StartingSection {...BannerInfo}></StartingSection>

      <InfoSec>
        <Container>

          {
            ((Object.keys(ProjectsInfo)).length === 0) ?

              <CenteredLargeText> There are currently no projects. </CenteredLargeText>

              :

              <BuildProjects ProjectsInfo={ProjectsInfo} ></BuildProjects>

          }


        </Container>
      </InfoSec>

    </>
  )

}

export default CategoryPages