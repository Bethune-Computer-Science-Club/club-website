import { useEffect } from 'react'
import { Link } from 'react-router-dom';
// import {animated, useTransition} from 'react-spring'

//import Arrows from '../Arrows/Arrows'

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
  InfoSec,
  Heading,
  MainText
} from '../InfoSection/InfoSection.elements'

export const PageLink = styled(Link)`
`

export const MobileMargins = styled.div`
  @media screen and (max-width: 960px){
    padding: 20px;
  }
`

export const MobileFlexbox = styled(InfoColumn)`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 960px){
    flex-direction: column;
  }
`

// These items will inherit their properties from their respective parents. Add a new property to overide inherited properties.
export const BigText = styled(Heading)`
  margin-bottom: 0;
`

export const Text = styled(MainText)`
  margin-bottom: 0;
`

export const HorizontalFlexbox = styled(InfoRow)`
  margin-bottom: 30px;
`

export const AdaptingFlexbox = styled(HorizontalFlexbox)`
  flex-direction: row;
  padding-bottom: 15px;
  /* @media screen and (max-width: 960px){
    flex-direction: column;
  } */
  @media screen and (max-width: 960px){
    padding-bottom: 0;
  }
`

export const Item = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
`

export const Image = styled(Img)`
`

export const Background = styled(InfoSec)`
`

// Just a restyling of InfoSection. More restrictive in its use. Changes in InfoSection will also be reflected here.
export const AnnouncementSection = ({ title = "No title.", description = "No description.", picture = CCCLogo, date = "No date." }) => {

  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>

      {/* use AOS */}
      <Container data-aos="fade-left">

        <HorizontalFlexbox>

          <Item>
            <Image src={picture}></Image>
          </Item>

          <Item>
            <AdaptingFlexbox>

              <Item>
                <Text style={{ fontSize: "25px" }}>
                  {title}
                </Text>
              </Item>

              <Item>
                <Text>
                  {date}
                </Text>
              </Item>

            </AdaptingFlexbox>

            <Text>
              {description}
            </Text>
          </Item>
        </HorizontalFlexbox>
      </Container>
    </>
  )
}
