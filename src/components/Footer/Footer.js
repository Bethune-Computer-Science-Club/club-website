import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import bethuneLogo from '../../images/bethuneLogo.gif'
import BCSCLogo from '../../images/BCSCLogo.png'

import { Container } from '../../globalStyles'
import { IconContext } from 'react-icons/lib'


import { FooterContainer, FooterRow, FooterColumn, Logo, Img, AddressWrapper, Address, CenterText, TextLink, ConnectHeader, SocialsWrapper, SocialsText, LastLineLogo, DateLastUpdated} from './Footer.elements'


function Footer () {
  return (
    <FooterContainer>
      <Container>
        <FooterRow>
          <FooterColumn>
            <Logo>
              <Img src={BCSCLogo}></Img>
              Bethune Computer Science Club
            </Logo>
            <AddressWrapper>
              <Address>200 Fundy Bay Boulevard</Address>
              <Address>Room B216</Address>
              <Address>Scarborough, ON</Address>
              <Address>M1W 3G1</Address>
            </AddressWrapper>
          </FooterColumn>
          <FooterColumn>
            <CenterText>
              This website was the result of a lot of hard work from Bethune’s coding club. You can find the credits to the original creators of the website <TextLink to='/team'>here</TextLink>.
            </CenterText>
            <CenterText>
              The source code for the website can be found <a href="https://youtu.be/oHg5SJYRHA0" style={{color: "#fff"}}>here</a>.
            </CenterText>
          </FooterColumn>

          <FooterColumn>
            <ConnectHeader>Connect With Us</ConnectHeader>
            <IconContext.Provider value={{color:'#fff', size: '2rem', padding: '50px'}}>
              <SocialsWrapper>
                <HiOutlineMail/>
                <SocialsText>bcicodingclub@tdsb.on.ca</SocialsText>
              </SocialsWrapper>
              <SocialsWrapper>
                <FaInstagram/>
                <SocialsText>@insertaccounthere</SocialsText>
              </SocialsWrapper>
            </IconContext.Provider>
          </FooterColumn>
        </FooterRow>

        <LastLineLogo>
          <img src={bethuneLogo}></img>
          Dr. Norman Bethune Collegiate Institute
        </LastLineLogo>
        <DateLastUpdated>
          Last Updated: February 30, 2021
        </DateLastUpdated>
      </Container>
    </FooterContainer>
  );
}

export default Footer
