import {useEffect} from 'react'

import styled from 'styled-components'

import { Container } from '../../globalStyles'

//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

import CCCLogo from '../../images/cccLogo.png'

import {
  InfoRow,
  InfoColumn,
  Img,
  InfoSec
} from '../InfoSection/InfoSection.elements'


// These items will inherit their properties from their respective parents. Add a new property to overide inherited properties.
export const HorizontalFlexbox = styled(InfoRow)`

`

export const Item = styled(InfoColumn)`

`

export const Image = styled(Img)`

`

export const Background = styled(InfoSec)`

`

// Just a restyling of InfoSection. More restrictive in its use. Changes in InfoSection will also be reflected here.
export const AnnouncementSection =  ({title = "No title.", description = "No description.", picture = CCCLogo, date = "No date."}) => {

  // console.log("AnnouncementSection", title, description, picture, date)
  // console.log("AnnouncementSection", picture)

  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return(

    <Background>
      <Container data-aos="fade-left">

        <HorizontalFlexbox>

          <Item>
            <Image src={picture}></Image>
          </Item>

          <Item>
            <h2 style={{color: "white"}}>
              {title}
            </h2>
            <h3 style={{color: "white"}}>
              {date}
            </h3>
            <h3 style={{color: "white"}}>
              {description}
            </h3>
          </Item>

        </HorizontalFlexbox>

      </Container>
    </Background>

  )
}