import React from 'react'
import {Column, HorizontalWrapper, InfoArea, LargeText, Img, BoxArea, CenteredLargeText, Text, BoldText, ProjectItem, PageBanner} from './RoboticsCSS' 
import {InfoSec} from '../../components/InfoSection/InfoSection.elements'
import {Container} from '../../globalStyles'
import {ProjectOne, BannerInfo} from './Data'

function Robotics() {

    // functions for modifying state inside components
    return (
        <>

            <InfoSec>  
                <Container>

                    <PageBanner {... BannerInfo}></PageBanner>
                    <ProjectItem {... ProjectOne}> </ProjectItem>

                </Container>
            </InfoSec>

        </>
    )
}

export default Robotics
