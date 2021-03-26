import styled from 'styled-components'

export const InfoSec = styled.div`
  padding: 30px 0;
  background-color: ${({theme}) => theme.bkgColor};
  transition: all 0.5s ease;
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;

  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  align-items: center;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  @media screen and (max-width: 960px) {
    padding-bottom: 10px;
  }
`
export const TextHeading = styled.div`
  color: ${({theme}) => theme.topLineColor};
  font-size: 20px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  transition: all 0.5s ease;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 30px;
  line-height: 1.1;
  color: ${({theme}) => theme.textColor};
  transition: all 0.5s ease;


  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const MainText = styled.p`
  max-width: 500px;
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 34px;
  color: ${({theme}) => theme.textColor};
  transition: all 0.5s ease;

`


export const Img = styled.img`
  vertical-align: middle;
  max-height: 350px;
  max-width: 100%;
`