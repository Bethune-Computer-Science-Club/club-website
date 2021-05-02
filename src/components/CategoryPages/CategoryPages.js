import {Container} from '../../globalStyles'
import {InfoSec} from '../InfoSection/InfoSection.elements'
import {
    CenteredStandardLargeText,
    BuildProjects,
} from './CategoryPages.elements'
import {StartingSection} from '../../components'


import React, {useEffect, useState} from 'react'
import Loader from '../../components/Loader/Loader'

// initialLoading:
// Set to '1' to skip loader animation.
function CategoryPages({initialLoading = 0, BannerInfo, ProjectsInfo}){
  const [timesLoaded, setLoading] = useState(initialLoading);

  useEffect(() => {
    setTimeout(() => {
      if (timesLoaded !== 1){
        setLoading(1);
      }
    }, 2150)
  })

  return(
    <>
      
      {
        (timesLoaded === 1) ? 
          
          <>
            {/* Page code here */}
            <>
                <StartingSection {...BannerInfo}></StartingSection>
                
                <InfoSec>  
                    <Container>

                        {
                            ((Object.keys(ProjectsInfo)).length === 0) ? 
                            
                            <CenteredStandardLargeText> There are currently no projects. </CenteredStandardLargeText>

                            :

                            <BuildProjects ProjectsInfo={ProjectsInfo}></BuildProjects>

                        }
                        

                    </Container>
                </InfoSec>

            </>
          </>

        :
          <Loader></Loader>
      }
      
    </>
  )
}

export default CategoryPages