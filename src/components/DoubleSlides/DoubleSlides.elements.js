import styled from 'styled-components'

export const InfoSec = styled.div`
  padding: 30px 0;
  background-color: ${({theme}) => theme.bkgColor};
  color: ${({theme}) => theme.textColor};
  transition: color 0.5s, background-color 0.5s;
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;

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
  border: none;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    justify-content: center;
  }
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 30px;
  line-height: 1.1;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const Slide = styled.iframe`
  width: 100%;
  height: min(30vw, 380px);

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 55vw;
  }
`