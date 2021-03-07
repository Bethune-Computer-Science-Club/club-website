import { Nav, NavbarContainer } from './Navbar.elements'
import logo from '../images/bethuneLogo.gif'
import NavLink from './NavLink'
export const Navbar = () => {

  return (
    <>
      <Nav>
        <NavbarContainer>
          <img src={logo}/>
          <NavLink name="Home"/>
          <NavLink name="Announcement"/>
          <NavLink name="Team"/>
          <NavLink name="Event"/>
          <NavLink name="Contact Us"/>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
