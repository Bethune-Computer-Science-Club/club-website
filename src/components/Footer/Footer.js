import React from 'react'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText} from './Footer.elements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receice the latest news and ternds
        </FooterSubHeading>
        <FooterSubText>You can unsub at anytime</FooterSubText>
      </FooterSubscription>
    </FooterContainer>
  )
}

export default Footer
