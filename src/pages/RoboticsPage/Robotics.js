import React from 'react'
import RoboticsPic from './../../images/Robotics.png'
import {HelloWorld, Column, HorizontalWrapper, InfoArea, LargeText, Img} from './RoboticsCSS' 
import {InfoSec} from '../../components/InfoSection/InfoSection.elements'
import {Container} from '../../globalStyles'

function Robotics() {

    // functions for modifying state inside components
    return (
        <>

            <HelloWorld> Hello, World! </HelloWorld>

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

                </Container>
            </InfoSec>

        </>
    )
}

export default Robotics
