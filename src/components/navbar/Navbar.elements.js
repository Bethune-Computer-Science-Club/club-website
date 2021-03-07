import styled from 'styled-components'
import { Container } from '../../globalStyles'

export const Nav = styled.nav`
    background: grey;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1.2rem;
    position: sticky;
    top: 0;
    z-index:999;
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content:space-between;
    height: 80px;

    ${Container}
`

export const NavLinkText = styled.div`
  display: block;
  padding: 30px;
  float: left;
  cursor:pointer;
`
export const NavTabs = styled.div`
  list-style-type: none;
  justify-content: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
`