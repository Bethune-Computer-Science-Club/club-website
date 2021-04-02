import styled from 'styled-components'
import titleBar from '../../images/titleBar.png'


export const SectionContainer = styled.div`
  background-image: url(${titleBar});
  color: ${({theme}) => theme.textColor};
  padding: 90px 0 10px 0; //take into account space at the top for the navbar
  transition: all 0.5s;
  width: 100%;
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
  align-items: center;
  display: flex;
`

export const HeadingText = styled.h1`
  font-size: 3.5rem;
  @media screen and (max-width: 960px) {
    margin: 0 10px 0 auto;
  }
`

export const Img = styled.img` 
  max-width: 150px;
  max-height: 80px;
  margin: 20px;
  @media screen and (max-width: 960px) {
    margin: 0 auto 0 10px;
  }
`
export const PageDescription = styled.p`
  text-align: center;
  font-size: 1.2rem;
`