import styled from 'styled-components'


export const SectionContainer = styled.div`
  background-color: ${({theme}) => theme.bkgColor};
  color: ${({theme}) => theme.textColor};
  padding: 30px 0;
  transition: all 0.5s ease;
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    align-items: center;
  }
`

export const TextWrapper = styled.div`
  max-width: 360px;
  @media screen and (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const Heading = styled.h1`
  font-size: 3.5rem;
  max-width: 370px;
  align-items: center;
  display: flex;

  @media screen and (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const Img = styled.img` 
  max-width: 150px;
  max-height: 80px;
  margin: 20px;
`
export const PageDescription = styled.p`
  text-align: center;
  font-size: 1.2rem;
`