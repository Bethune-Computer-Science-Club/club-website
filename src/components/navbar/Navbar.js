import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useState } from 'react';
import { IconContext } from 'react-icons/lib'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  Img,
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  ThemeToggle,
  Slider,
  SliderIcon
} from './Navbar.elements'

import BCSCLogo from '../../images/BCSCLogo.png'

import { FaMoon, FaSun } from 'react-icons/fa'
import { BsSun } from 'react-icons/bs'

export const Navbar = ({ theme, setTheme }) => {
  //theme changer
  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }

  //button functionality???
  const [click, setClick] = useState(false)
  
  const handleClick = () => setClick(!click)


  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <Img src={BCSCLogo} ></Img>
            Bethune Computer Science Club
          </NavLogo>
          <IconContext.Provider value={{color:'#fff'}}> {/*Makes the icon white*/}
            <MobileIcon onClick={handleClick}> {/*Toggles between the X and the triple bar icon when clicked*/}
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
          </IconContext.Provider>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/'>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/projects'>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/team'>Team</NavLinks>
            </NavItem>
              {/* <ThemeToggle onClick={changeTheme}>{icon}</ThemeToggle> */}
            <ThemeToggle>
              <Slider onClick={changeTheme}>
                <SliderIcon>
                  {theme === 'light' ? <FaSun /> : <FaMoon />}
                </SliderIcon>
              </Slider>
            </ThemeToggle>

          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar