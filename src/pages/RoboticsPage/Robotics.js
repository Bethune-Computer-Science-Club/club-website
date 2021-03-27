import React from 'react'
import BCSCLogo from './../../images/BCSCLogo.png'
import {HelloWorld, TestImage, Row, Column, ActualImage, Background, Grid} from './RoboticsCSS' 

function Robotics() {

    // functions for modifying state inside components
    return (
        <Background>  
            <HelloWorld> hello, world! </HelloWorld>
            <ActualImage src={BCSCLogo}></ActualImage>

            <Grid>
                <Row> 
                    <Column> Lorem ipsum dolor sit amet, ludus suscipiantur signiferumque sit in, an amet definitiones per. Ad bonorum praesent quo, in cum postea disputando. Vix ea solet animal vidisse, cu utroque splendide has. Eam an nominati voluptatibus, sed in magna exerci aperiam, ex has erant elaboraret. At wisi ferri his. </Column> 
                    <Column> Lorem ipsum dolor sit amet, ludus</Column> 
                    <Column> Lorem ipsum dolor sit amet, ludus</Column> 
                </Row>
            </Grid>


        </Background>
    )
}

export default Robotics
