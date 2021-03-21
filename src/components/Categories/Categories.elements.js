import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const InfoSec = styled.div`
  padding: 30px 0;
  color: ${({theme}) => theme.textColor};
  background-color: ${({theme}) => theme.bkgColor};
  transition: all 0.5s ease;
`

export const InfoRow1 = styled.div`
  display: flex;
  padding: 0 20% 10px 15%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 850px) {
    padding: 0 0 0 0;
    justify-content: space-around;
  }
`

export const InfoRow2 = styled.div`
  display: flex;
  padding: 10px 15% 0 20%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 850px) {
    padding: 0 0 0 0;
    justify-content: space-around;
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

export const LinkImg = styled(Link)`
  background-size: cover;
  width: 300px;
  height: 175px;
  margin: 5px;
  text-decoration: none;
  opacity: 0.75;

  &:hover {
    border-style: solid;
    border-width: 5px;
    border-color: #a89e32;
    transition: 200ms ease-in-out;
    opacity: 1;
  }
`
export const LinkText = styled.h1`
  color: #000;
  text-align: center;
  font-size: 2.75rem;
  line-height: 375%; 

`