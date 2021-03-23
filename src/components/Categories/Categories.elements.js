import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const InfoSec = styled.div`
  padding: 30px 0 0;
  color: ${({theme}) => theme.textColor};
  background-color: ${({theme}) => theme.bkgColor};
  transition: all 0.5s ease;
`

export const InfoRow1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 0 15px 0;
`

export const InfoRow2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px 0 0 0;
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
  z-index: 1;

  background-size: cover;
  width: 350px;
  height: 200px;
  margin: 10px;
  text-decoration: none;
  opacity: 0.8;
  clip-path: polygon(0 0, 85% 0, 100% 25%, 100% 100%, 15% 100%, 0% 75%);

  &:hover {
    opacity: 1;
  }
`
export const LinkText = styled.h1`
  color: #000;
  text-align: center;
  font-size: 2.75rem;
  line-height: 200px;
  margin: auto;
  z-index: 2;

`
