import React from 'react'
import { Container } from '../../globalStyles'
import { IconContext } from 'react-icons/lib'
//Icons
import { FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { RiFacebookCircleLine } from 'react-icons/ri'
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
  TextLink, 
  ConnectHeader, 
  SocialsWrapper, 
  SocialsText, 
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
              <Address>Room B216</Address>
              <Address>Scarborough, ON</Address>
              <Address>M1W 3G1</Address>
            </AddressWrapper>
          </FooterColumn>
          <CenterFooterColumn>
            <CenterText>
              This website was the result of a lot of hard work from Bethune’s coding club. You can find the credits to the original creators of the website <TextLink to='/team'>here</TextLink>.
            </CenterText>
            <CenterText>
              The source code for the website can be found <a href="https://github.com/Bethune-Computer-Science-Club/club-website" target="_blank" rel="noreferrer" style={{color: "#fff"}}>here</a>.
            </CenterText>
            <CenterText>
              The citations to all copyrighted images used on the site can be found <a href="https://docs.google.com/document/d/146j1ScfZwgqHibn3VtmJlUwq7lrIYs1yOFeAPzg_7lU/edit?usp=sharing" target="_blank" rel="noreferrer" style={{color: "#fff"}}>here</a>.
            </CenterText>
          </CenterFooterColumn>

          <FooterColumn style={{width: '300px'}}>
            <ConnectColumnContainer>
              <ConnectHeader>Connect With Us</ConnectHeader>
              <IconContext.Provider value={{color:'#fff', size: '2rem', padding: '50px'}}>
                <SocialsWrapper>
                  <HiOutlineMail/>
                  <SocialsText>bcicompsciclub@gmail.com</SocialsText>
                </SocialsWrapper>
                <SocialsWrapper>
                  <FaInstagram/>
                  <SocialsLink href="https://www.instagram.com/bcicompsciclub/?hl=en" target="_blank" rel="noreferrer">@bcicompsciclub</SocialsLink>
                </SocialsWrapper>
                <SocialsWrapper>
                  <RiFacebookCircleLine/>
                  <SocialsLink href="https://www.facebook.com/bcicompsciclub/" target="_blank" rel="noreferrer">Bethune Comp Sci Club</SocialsLink>
                </SocialsWrapper>
              </IconContext.Provider>
            </ConnectColumnContainer>
          </FooterColumn>
        </FooterRow>

        <LastLineLogo>
          <img src={bethuneLogo} alt={"BCSC Logo"}></img>
          Dr. Norman Bethune Collegiate Institute
        </LastLineLogo>
        <DateLastUpdated>
          Last Updated: March 21, 2021 - Prototype Phase - V 0.0
        </DateLastUpdated>
      </Container>
    </FooterContainer>
  );
}

export default Footer
