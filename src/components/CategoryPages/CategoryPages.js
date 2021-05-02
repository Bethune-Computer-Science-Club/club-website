import {Container} from '../../globalStyles'
import {InfoSec} from '../InfoSection/InfoSection.elements'
import {
    CenteredStandardLargeText,
    BuildProjects,
} from './CategoryPages.elements'
import {StartingSection} from '../../components'

import {getFinishTimeFromMode} from '../../components/Loader/LoaderTimings'

import React, {useEffect, useState} from 'react'
import Loader from '../../components/Loader/Loader'

// initialLoading:
// Set to '1' to skip loader animation.

// mode:
//  -Controls the speed of the animation.
// Set to '"standard"' for a 2.2s animation.
// Set to '"fast"' for a slightly faster animation
// Set to '"fastest"' for a faster animation with a very fast bar fill

// See src/components/Loader/LoaderTimings.jsx for more details.
function CategoryPages({initialLoading = 0, mode="fast", BannerInfo, ProjectsInfo}){
  const [timesLoaded, setLoading] = useState(initialLoading);

  useEffect(() => {
    setTimeout(() => {
      if (timesLoaded !== 1){
        setLoading(1);
      }
    }, getFinishTimeFromMode(mode))
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
          <Loader mode={mode}></Loader>
      }
      
    </>
  )
}

export default CategoryPages