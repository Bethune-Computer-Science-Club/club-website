import React from 'react'

import {Container} from '../../globalStyles'
import {InfoSec} from '../../components/InfoSection/InfoSection.elements'

import { InfoSection } from '../../components'
import { InfoSectionData } from './Data'

import { StartingSection } from '../../components'
import { BannerData } from './Data'

const JoinUs = () => {
    
    return (
        <>

            <StartingSection {...BannerData}></StartingSection>

            <InfoSec>
                <Container>

                    {
                        InfoSectionData.map(OneSection => <InfoSection {...OneSection}></InfoSection>)
                    }

                </Container>
            </InfoSec>
            
        </>
    )
}

export default JoinUs
