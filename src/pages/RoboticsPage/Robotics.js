import React from 'react'
import {ProjectItem, PageBanner} from './RoboticsCSS' 
import {InfoSec} from '../../components/InfoSection/InfoSection.elements'
import {Container} from '../../globalStyles'
import {Projects, BannerInfo} from './Data'

function BuildProjects (){

    return (
        Projects.map(project => <ProjectItem {... project}> </ProjectItem>)
    )

}

function Robotics() {

    return (
        <>

            <InfoSec>  
                <Container>

                    <PageBanner {... BannerInfo}></PageBanner>
                    
                    {BuildProjects()}

                </Container>
            </InfoSec>

        </>
    )
}

export default Robotics