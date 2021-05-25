import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const AdminSec = styled.div`
  padding: 30px 0 30px;
  color: ${({theme}) => theme.textColor};
  background-color: ${({theme}) => theme.bkgColor};
  transition: color 0.5s, background-color 0.5s;
  align-items: center;
  display: flex;
  height: 500px;

  @media screen and (max-width: 960px) {
    display: block;
    height: 100%;
  }

`

export const NavItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`

export const NavItem = styled(Link)`
  width: 250px;
  height: 220px;
  text-decoration: none;
  cursor: pointer;
  margin: 20px;
  background: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(45,75,253,1) 100%);
  opacity: 0.9;
  border-radius: 10px;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
`

export const NavText = styled.p`
  color: ${({theme}) => theme.textColor};
  font-size: 30px;
  transition: color 0.5s;
  display: flex;
  justify-content: center;
  width: 250px;
  margin: 10px 0 0 0;
`

export const Icon = styled.div`
  color: #fff;
  font-size: 100px;
  width: 250px;
  text-align: center;
`
