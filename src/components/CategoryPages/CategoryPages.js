import React from 'react'
import titleBar from '../../images/titleBar.png'

import {Container} from '../../globalStyles'
import {InfoSec} from '../InfoSection/InfoSection.elements'
import {
    CenteredLargeText,
    BuildProjects,
} from './CategoryPages.elements'
import {StartingSection} from '../../components'


const CategoryPages = ({BannerInfo, ProjectsInfo}) => {

    return (
        <>
            
            <InfoSec style={{ backgroundImage: `url(${titleBar})` }}>  
                <Container>

                    <StartingSection {...BannerInfo}></StartingSection>

                </Container>
            </InfoSec>

            <InfoSec>  
                <Container>

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