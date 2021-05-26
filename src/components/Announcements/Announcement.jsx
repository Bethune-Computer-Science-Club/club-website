import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'

import {
  Background,
  Heading,
  InfoRow,
  InfoColumn,
  Image,
  Title,
  Date,
  Description,
  SeeAllAnnouncements,
  TextWrapper
} from './Announcement.elements'


//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'


const Announcement = ({ title, date, description, picture, renderHeadingAndLink}) => {
  useEffect(() => { //Get the announcements in the database on first render
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true });
  }, [])

  return (
    <Background>
      <Container>
        <Heading>{renderHeadingAndLink ? 'Announcements': ''}</Heading>
        <InfoRow>
          <InfoColumn data-aos='fade-left'>
            <Image src={picture} alt='Announcement Image'></Image>
          </InfoColumn>
          <InfoColumn data-aos='fade-right'>
            <TextWrapper>
              <Title>{title}</Title>
              <Date>{date}</Date>
              <Description>{description}</Description>
            </TextWrapper>
          </InfoColumn>
        </InfoRow>
        {renderHeadingAndLink ? <SeeAllAnnouncements to='/announcements'>See All Announcements &gt;</SeeAllAnnouncements>: <></>}
        
      </Container>
    </Background>
  )
}

export default Announcement
