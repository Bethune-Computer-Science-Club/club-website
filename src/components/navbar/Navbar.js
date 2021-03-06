import React from 'react'
import {NavLink} from './NavLink'
import { Nav, NavbarContainer, NavLog } from './Navbar.elements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLog />
          <NavLink name="Home"/>
          <NavLink name="Announcements"/>
          <NavLink name="Events"/>
          <NavLink name="Lessons"/>
          <NavLink name="Team"/>
          <NavLink name="Contact Us "/>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
