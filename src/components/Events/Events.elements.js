import styled from 'styled-components'
// import { Link } from 'react-router-dom';

export const InfoSec = styled.div`
  padding: 30px 0 50px 0;
  background-color: ${({theme}) => theme.bkgColor};
  color: ${({theme}) => theme.textColor};
  transition: all 0.5s ease;
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`
  margin-bottom: 5px;
  padding-right: 15px;
  padding-left: 15px;
  width: 50%;

  @media screen and (max-width: 760px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  font-size: 1.2rem;
  @media screen and (max-width: 760px) {
    padding-bottom: 10px;
  }
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 30px;
  line-height: 1.1;

  @media screen and (max-width: 760px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const ImgWrapper = styled.div`
  height: 50%;
`

export const Img = styled.img`
  display: block;
  margin: auto;
  max-width: 300px;
  max-height: 180px;
`

export const MoreInfoLink = styled.a`
  float: right;
  color: ${({theme}) => theme.textColor};
`