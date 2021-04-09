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
                            <LargeText> Test </LargeText>

                        </Column>

                        <Column>

                            <CenteredLargeText> Club Website </CenteredLargeText>
                            <br></br>
                            <BoldText> Authors: </BoldText>
                            <Text> Traversy Media, Brian Design, Stackoverflow </Text>
                            <br></br>
                            <Text> Lorem .............. i need some lorem text iojaofdsnafoadfnoa apsij foajds aefiujidojdo aosdoijao isjdao jaodisjasoidjoasj oiajdio asd jioasjd as iasodias joasj doasjdoias jsd </Text>

                        </Column>

                    </BoxArea>

                </Container>
            </InfoSec>

        </>
    )
}

export default Robotics
