import React from 'react'
import { NavLinkText } from './Navbar.elements'

export const NavLink = ({name}) => {
  return (
    <>
     <NavLinkText>
        {name}
      </NavLinkText> 
    </>
  )
}

export default NavLink
