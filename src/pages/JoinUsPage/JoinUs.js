import React from 'react'

import {Container} from '../../globalStyles'
import {InfoSec} from '../../components/InfoSection/InfoSection.elements'

import { InfoSection } from '../../components'
import { InfoSectionData } from './Data'

import { PageBanner } from '../../components/CategoryPages/CategoryPages.elements'
import { BannerData } from './Data'
import titleBar from '../../images/titleBar.png'

const JoinUs = () => {

    console.log("Types")
    console.log("hello".type)
    console.log((<div></div>).type)
    console.log(typeof ("hello"))
    console.log(typeof (<div></div>))

    return (
        <>

            <InfoSec style={{ backgroundImage: `url(${titleBar})` }}>
                <Container>

                    <PageBanner {...BannerData}></PageBanner>

                </Container>
            </InfoSec>

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
