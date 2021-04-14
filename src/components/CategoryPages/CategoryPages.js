import {Container} from '../../globalStyles'
import {InfoSec} from '../InfoSection/InfoSection.elements'
import {
    CenteredLargeText,
    PageBanner,
    BuildProjects,
} from './CategoryPages.elements'

const CategoryPages = ({BannerInfo, ProjectsInfo}) => {

    console.log("ProjectsInfo.size: ", (Object.keys(ProjectsInfo)).length)

    return (
        <>

            <InfoSec>  
                <Container>

                    <PageBanner {...BannerInfo}></PageBanner>
                    {
                        ((Object.keys(ProjectsInfo)).length === 0) ? 
                        
                        <CenteredLargeText> There are currently no projects. </CenteredLargeText>

                        :

                        <BuildProjects ProjectsInfo={ProjectsInfo}></BuildProjects>

                    }
                    

                </Container>
            </InfoSec>

        </>
    )
    
}

export default CategoryPages