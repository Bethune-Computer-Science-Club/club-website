import React from 'react'
import { Container } from '../../globalStyles'

//Styled Components
import {
  AdminSec,
  NavItem,
  NavLinks
} from './AdminSection.elements'

export const AdminSection = () => {
  return (
    <AdminSec>
      <Container>
          <NavItem>
            <NavLinks to='/admin/announcements'>Announcements</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/admin/projects'>Projects</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/admin/execs'>Execs</NavLinks>
          </NavItem>
      </Container>
    </AdminSec>
  );
};

export default AdminSection

