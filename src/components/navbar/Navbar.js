import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from './Navbar.elements'

export const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  
  const handleClick = () => setClick(!click)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton)

  return (
    <>
      <IconContext.Provider value={{color:'#fff'}}> {/*Makes the icon white*/}
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              Dr. Norman Bethune Collegiate Institute
            </NavLogo>
            <MobileIcon onClick={handleClick}> {/*Toggles between the X and the triple bar icon when clicked*/}
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services'>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products'>Products</NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>

            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar