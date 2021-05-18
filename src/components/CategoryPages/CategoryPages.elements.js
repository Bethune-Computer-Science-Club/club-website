import React from 'react'
import styled from 'styled-components'

export const InfoArea = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Column = styled.div`
    padding: 5%;
    text-align: center;
    background-color: ${props => props.bgColor};
`

export const RoundLeftColumn = styled.div`
    padding: 5%;
    text-align: center;
    background-color: ${props => props.bgColor};
    border-radius: ${props => props.topLeftCorner}px 0px 0px ${props => props.botLeftCorner}px;
`

export const RoundRightColumn = styled.div`
    padding: 5%;
    text-align: center;
    background-color: ${props => props.bgColor};
    border-radius: 0px ${props => props.topRightCorner}px ${props => props.botRightCorner}px 0px;
`

export const LargeText = styled.p`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.textColor};
`

export const LargeNoWrapText = styled.p`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.textColor};
    white-space: nowrap;
`

export const CenteredLargeText = styled.p`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.textColor};
    text-align: center;
`

export const CenteredText = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.textColor};
    text-align: center;
`

export const BoldText = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.textColor};
    text-align: left;
    font-weight: bold;
`

export const Text = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.textColor};
    text-align: left;
`

export const Img = styled.img`
`

export const SpacedImg = styled.img`
    margin-left: 10%;
`

export const HorizontalWrapper = styled.div`
    display: flex;
`

export const BoxArea = styled.div`
    display: flex;
    justify-content: center;
`


export const PageBanner = ({ pageTitle, img, description }) => {

  return (

    <InfoArea>

      <Column>
        <HorizontalWrapper>
          <LargeNoWrapText> {pageTitle} </LargeNoWrapText>
          <SpacedImg src={img}></SpacedImg>
        </HorizontalWrapper>
      </Column>

      <Column>
        <LargeText> {description} </LargeText>
      </Column>

    </InfoArea>

  )

}

export const ProjectItem = ({ projectName, authors, description, img }) => {
  const borderRounding = 100;

  return (
    <>
      <BoxArea data-aos='fade-right'>

        <RoundLeftColumn bgColor='red' topLeftCorner={borderRounding} botLeftCorner={borderRounding}>

          <Img src={img}></Img>
          {/* <LargeText> {lowerSubtitle} </LargeText> */}

        </RoundLeftColumn>

        <RoundRightColumn bgColor='green' topRightCorner={borderRounding} botRightCorner={borderRounding}>

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

export const BuildProjects = ({ Projects }) => {

  return (
    Projects.map(project => <ProjectItem {...project}> </ProjectItem>)
  )

}