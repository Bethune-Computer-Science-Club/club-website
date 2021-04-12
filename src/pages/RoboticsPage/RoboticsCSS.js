import styled from 'styled-components'

export const Background = styled.div`
    background: black;
`

export const HelloWorld = styled.h1`
    background: red;
    text-transform: capitalize;
    text-align: center;
`

export const ActualImage = styled.img`
    width:  50%;
    height: 50%;
    padding: 40px;
    border: 20px solid yellowgreen;
    margin: 40px;
`

export const InfoArea = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Column = styled.div`
    padding: 5%;
    text-align: center;
    background-color: ${props => props.bgColor};
`

export const RoundLeftColumn =  styled.div`
    padding: 5%;
    text-align: center;
    background-color: ${props => props.bgColor};
    border-radius: ${props => props.topLeftCorner}px 0px 0px ${props => props.botLeftCorner}px;
`

export const RoundRightColumn =  styled.div`
    padding: 5%;
    text-align: center;
    background-color: ${props => props.bgColor};
    border-radius: 0px ${props => props.topRightCorner}px ${props => props.botRightCorner}px 0px;
`

export const LargeText = styled.p`
    font-size: 2.5rem;
    color: ${({theme}) => theme.textColor};
`

export const CenteredLargeText = styled.p`
    font-size: 2.5rem;
    color: ${({theme}) => theme.textColor};
    text-align: center;
`

export const CenteredText = styled.p`
    font-size: 1.2rem;
    color: ${({theme}) => theme.textColor};
    text-align: center;
`

export const BoldText = styled.p`
    font-size: 1.2rem;
    color: ${({theme}) => theme.textColor};
    text-align: left;
    font-weight: bold;
`

export const Text = styled.p`
    font-size: 1.2rem;
    color: ${({theme}) => theme.textColor};
    text-align: left;
`


export const Img = styled.img`
`

export const HorizontalWrapper = styled.div`
    display: flex;
`

export const BoxArea = styled.div`
    display: flex;
    justify-content: center;
`

export const PageBanner = ({pageTitle, img, description}) => {

    return (

        <InfoArea>

            <Column>
                <HorizontalWrapper>
                    <LargeText> {pageTitle} </LargeText>
                    <Img src={img}></Img>
                </HorizontalWrapper>
            </Column>

            <Column>
                <LargeText> {description} </LargeText>
            </Column>

        </InfoArea>

    )

}

export const ProjectItem = ({leftBgColor, rightBgColor, img, lowerSubtitle, projectName, authors, description}) => {

    const borderRounding = 100;

    return (
        <>
            <BoxArea>

                <RoundLeftColumn bgColor={leftBgColor} topLeftCorner={borderRounding} botLeftCorner={borderRounding}>

                    <Img src={img}></Img>
                    <LargeText> {lowerSubtitle} </LargeText>

                </RoundLeftColumn>

                <RoundRightColumn bgColor={rightBgColor} topRightCorner={borderRounding} botRightCorner={borderRounding}>

                    <CenteredLargeText> {projectName} </CenteredLargeText>
                    <br></br>
                    <BoldText> Authors: </BoldText>
                    <Text> {authors} </Text>
                    <br></br>
                    <Text> {description} </Text>

                </RoundRightColumn>

            </BoxArea>
            <br></br>
        </>
    )

}