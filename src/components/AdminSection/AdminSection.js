import React from 'react'
import { Container } from '../../globalStyles'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { IoMegaphone } from 'react-icons/io5'
import { BsPeopleFill } from 'react-icons/bs'

//Styled Components
import {
  AdminSec,
  NavItemContainer,
  NavItem,
  NavText,
  Icon
} from './AdminSection.elements'


export const AdminSection = () => {
  return (
    <AdminSec>
      <Container>
        <NavItemContainer>
          <NavItem to='/admin/announcements'>
            <NavText>Announcements</NavText>
            <Icon><IoMegaphone/></Icon>
          </NavItem>
          <NavItem to='/admin/projects'>
            <NavText>Projects</NavText>
            <Icon><AiOutlineFundProjectionScreen/></Icon>
          </NavItem>
          <NavItem to='/admin/execs'>
            <NavText>Execs</NavText>
            <Icon><BsPeopleFill/></Icon>
          </NavItem>
        </NavItemContainer>
      </Container>
    </AdminSec>
  );
};

export default AdminSection

