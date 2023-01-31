import React from 'react'
import { Container } from '../../globalStyles'
import { IconContext } from 'react-icons/lib'
//Icons
import { FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
//Images
import bethuneLogo from '../../images/bethuneLogo.gif'
import BCSCLogo from '../../images/BCSCLogo.png'
//Styled Components
import { 
  FooterContainer, 
  FooterRow, 
  FooterColumn, 
  CenterFooterColumn, 
  Logo, 
  Img, 
  AddressWrapper, 
  Address, 
  CenterText, 
  ConnectHeader, 
  SocialsWrapper, 
  SocialsLink, 
  LastLineLogo, 
  DateLastUpdated, 
  ConnectColumnContainer} from './Footer.elements'


function Footer () {
  return (
    <FooterContainer>
      <Container>
        <FooterRow>
          <FooterColumn>
            <Logo>
              <Img src={BCSCLogo} alt={"BCSC Logo"}></Img>
              Bethune Computer Science Club
            </Logo>
            <AddressWrapper>
              <Address>200 Fundy Bay Boulevard</Address>
              <Address>Room A214</Address>
            </AddressWrapper>
          </FooterColumn>
          <CenterFooterColumn>
            <CenterText>
              The source code for the website can be found <a href="https://github.com/Bethune-Computer-Science-Club/club-website" target="_blank" rel="noreferrer" style={{color: "#fff"}}>here</a>.
            </CenterText>
          </CenterFooterColumn>

          <FooterColumn style={{width: '300px'}}>
            <ConnectColumnContainer>
              <ConnectHeader>Connect With Us</ConnectHeader>
              <IconContext.Provider value={{color:'#fff', size: '2rem', padding: '50px'}}>
                <SocialsWrapper>
                  <HiOutlineMail/>
                  <SocialsLink href="mailto:bcicompsciclub@gmail.com" target="_blank" rel="noreferrer">bcicompsciclub@gmail.com</SocialsLink>
                </SocialsWrapper>
                <SocialsWrapper>
                  <FaInstagram/>
                  <SocialsLink href="https://www.instagram.com/bcicompsciclub/?hl=en" target="_blank" rel="noreferrer">@bcicompsciclub</SocialsLink>
                </SocialsWrapper>
              </IconContext.Provider>
            </ConnectColumnContainer>
          </FooterColumn>
        </FooterRow>

        <LastLineLogo>
          <img src={bethuneLogo} alt={"BCSC Logo"}></img>
          Dr. Norman Bethune Collegiate Institute
        </LastLineLogo>
        <DateLastUpdated to='/admin'>
          Last Updated: Jan 31, 2023 - V 1.0
        </DateLastUpdated>
      </Container>
    </FooterContainer>
  );
}

export default Footer
