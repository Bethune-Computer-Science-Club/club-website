import styled from 'styled-components'

export const InfoSec = styled.div`
  color: ${({theme}) => theme.textColor};
  padding: 20px 0 0 0;
  background-color: ${({theme}) => theme.bkgColor};
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

  @media screen and (max-width: 760px) {
    max-width: 100%;
    flex-basis: 100%;
    margin-bottom: 40px;
  }
`

export const TextWrapper = styled.div`
  max-width: 360px;
  @media screen and (max-width: 760px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 4rem;
`

export const Subheading = styled.p`
  margin-bottom: 24px;
  font-size: 1.5rem;
`

export const WelcomeCode = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  font-size: 1.5rem;
`

export const Img = styled.img` 
  width: 40px;
  margin-left: 10px;
`
