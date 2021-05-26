import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Background = styled.div`
  padding: 30px 0;
  color: ${({theme}) => theme.textColor};
  background-color: ${({theme}) => theme.bkgColor};
  transition: color 0.5s, background-color 0.5s;
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

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;

  flex-direction: row;

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse; //Make the text display before the image
  }
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
    display: flex;
    justify-content: center;
  }
`

export const Image = styled.img`
  vertical-align: middle;
  max-height: 500px;
  width: 400px;
`
export const Title = styled.h1`

`
export const Date = styled.p`
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`

export const Description = styled.p`

`

export const SeeAllAnnouncements = styled(Link)`
  float: right;
  cursor: pointer;
  color: ${({theme}) => theme.textColor};
`

export const TextWrapper = styled.div`

`