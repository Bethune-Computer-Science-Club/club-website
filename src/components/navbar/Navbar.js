import { Nav, NavbarContainer,NavTabs } from './Navbar.elements'
import logo from '../images/bethuneLogo.gif'
import NavLink from './NavLink'
export const Navbar = () => {

  return (
    <Nav>
      <NavbarContainer>
        <img src={logo} />
        <NavTabs>
          <NavLink name="Home" />
          <NavLink name="Announcement" />
          <NavLink name="Team" />
          <NavLink name="Event" />
          <NavLink name="Contact Us" />

        </NavTabs>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar