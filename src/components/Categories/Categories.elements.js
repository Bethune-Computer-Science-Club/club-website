import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const InfoSec = styled.div`
  padding: 30px 0 0;
  color: ${({theme}) => theme.textColor};
  background-color: ${({theme}) => theme.bkgColor};
  transition: all 0.5s ease;
`

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`

export const Heading = styled.h1`
  font-size: 30px;
  line-height: 1.1;

  @media screen and (max-width: 760px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const LinkText = styled.h1`
  width: 20px;
  height: 100%;
  background-color: rgb(0, 0, 0, 1);

  font-size: 0.8rem;
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: #0099ff;

  transition: all 0.2s ease;

`

export const LinkImg = styled(Link)`
  background-size: cover;
  width: 350px;
  height: 200px;
  margin: 25px 10px;
  text-decoration: none;
  clip-path: polygon(0 0, 85% 0, 100% 25%, 100% 100%, 15% 100%, 0% 75%);

  &:hover ${LinkText} {
    width: 100%;
    height: 100%;
    writing-mode: horizontal-tb;
    font-size: 2.75rem;
    text-align: center;
    line-height: 200px;
    background-color: rgb(0, 0, 0, 0.8);    
  }
`

