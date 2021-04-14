import React from 'react'

import {Container} from '../../globalStyles'
import {InfoSec} from '../InfoSection/InfoSection.elements'
import {
    CenteredLargeText,
    PageBanner,
    BuildProjects,
} from './CategoryPages.elements'

const CategoryPages = ({BannerInfo, ProjectsInfo}) => {

    return (
        <>

            <InfoSec>  
                <Container>

                    <PageBanner {...BannerInfo}></PageBanner>
                    {
                        ((Object.keys(ProjectsInfo)).length === 0) ? 
                        
                        <CenteredLargeText> There are currently no projects. </CenteredLargeText>

                        :

                        <BuildProjects ProjectsInfo={ProjectsInfo}></BuildProjects>

                    }
                    

                </Container>
            </InfoSec>

        </>
    )
    
}

export default CategoryPages