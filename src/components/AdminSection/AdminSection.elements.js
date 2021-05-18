import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const AdminSec = styled.div`
  padding: 30px 0 0;
  color: ${({theme}) => theme.textColor};
  background-color: ${({theme}) => theme.bkgColor};
  transition: color 0.5s, background-color 0.5s;
`

export const NavItem = styled.div`
  width: 200px;
  height: 100px;
  border: 5px solid #4b59f7;
  border-radius: 10px;
  &:hover {
    border: 7px solid #4b59f7;
  }
`

export const NavLinks = styled(Link)`
  color: ${({theme}) => theme.textColor};
  transition: color 0.5s;
  text-decoration: none;
  padding: 7px 20px;
  position: absolute;

  
@media screen and (max-width: 960px) {
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;
  height: 100%;
  
  &:hover {
    color: #4b59f7;
    transition: color 0.5s;
    }
  }
`
