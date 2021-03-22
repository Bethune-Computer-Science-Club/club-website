import React from 'react'
import { InfoSection } from '../../components'
import { projectOne } from './Data'

function Robotics() {

    // functions for modifying state inside components
    return (
        <InfoSection {...projectOne}></InfoSection>
    )
}

export default Robotics
