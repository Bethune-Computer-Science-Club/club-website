import React from 'react'
import RoboticsPic from './../../images/Robotics.png'
import BCSCLogo from './../../images/BCSCLogo.png'
import {Column, HorizontalWrapper, InfoArea, LargeText, Img, BoxArea, CenteredLargeText, Text, BoldText} from './RoboticsCSS' 
import {InfoSec} from '../../components/InfoSection/InfoSection.elements'
import {Container} from '../../globalStyles'

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

                    <BoxArea>

                        <Column>

                            <Img src={BCSCLogo}></Img>
                            <LargeText> Bethune CS Club </LargeText>

                        </Column>

                        <Column>

                            <CenteredLargeText> Club Website </CenteredLargeText>
                            <br></br>
                            <BoldText> Authors: </BoldText>
                            <Text> Traversy Media, Brian Design, Stackoverflow </Text>
                            <br></br>
                            <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>

                        </Column>

                    </BoxArea>

                </Container>
            </InfoSec>

        </>
    )
}

export default Robotics
