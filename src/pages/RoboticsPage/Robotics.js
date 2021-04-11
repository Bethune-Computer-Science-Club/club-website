import React from 'react'
import RoboticsPic from './../../images/Robotics.png'
import BCSCLogo from './../../images/BCSCLogo.png'
import {Column, HorizontalWrapper, InfoArea, LargeText, Img, BoxArea, CenteredLargeText, Text, BoldText, ProjectItem} from './RoboticsCSS' 
import {InfoSec} from '../../components/InfoSection/InfoSection.elements'
import {Container} from '../../globalStyles'
import {ProjectOne} from './Data'

function Robotics() {

    // functions for modifying state inside components
    return (
        <>

            <InfoSec>  
                <Container>

                    <InfoArea>

                        <Column>
                            <HorizontalWrapper>
                                <LargeText> Robotics </LargeText>
                                <Img src={RoboticsPic}></Img>
                            </HorizontalWrapper>
                        </Column>

                        <Column>
                            <LargeText> Beep Boop, Beep Boop. </LargeText>
                        </Column>

                    </InfoArea>

                    <ProjectItem {... ProjectOne}> </ProjectItem>

                </Container>
            </InfoSec>

        </>
    )
}

export default Robotics
