import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { DarkTheme } from '../../themes';

export const Nav = styled.nav`
  background-color: #03001c;
  /* background-color: ${({theme}) => theme.bkgColor}; restore when navbar is fixed */
  background-color: ${({navbarSolid}) => (navbarSolid ? null : 'rgba(0, 0, 0, 0%)')};
  color: ${({theme}) => theme.textColor};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  transition: background-color 0.5s, color 0.5s;
`
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`

export const NavLogo = styled(Link)` 
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  line-height: 100%;
  transition: color 0.5s;

  @media screen and (max-width: 650px) {
    font-size: 1.8rem;
    width: 90%;
  }
`

export const Img = styled.img` 
  width: 80px;
  margin-right: 10px;
`


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')}; //slides the mobile nav bar over when icon is clicked
    opacity: 1;
    transition: all 0.5s ease;
    background-color: ${({theme}) => theme.bkgColor};
  }
`

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 3px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`

export const NavLinks = styled(Link)`
  color: #fff;
  transition: color 0.5s;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

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
//Stuff below used for the dark/light theme toggle

export const ThemeToggle = styled.label`
  padding: 0.5rem 1rem;
  position: relative;
`

export const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  position: relative;
  background-color: ${({theme}) => theme.textColor};
  transition: background-color 0.5s;
`

export const SliderIcon = styled.div`
  margin: 0 2px;
  transform: translateX(${({theme}) => (theme === DarkTheme) ? 0 : '25px'});
  color: ${({theme}) => theme.bkgColor};
  transition: transform 0.5s, color 0.5s;
`