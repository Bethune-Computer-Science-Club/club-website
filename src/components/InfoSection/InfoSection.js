import React, { useEffect, useState } from 'react'
import { Container } from '../../globalStyles'
import Axios from 'axios'

//Styled Components
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TextHeading,
  Heading,
  MainText,
  Img
} from './InfoSection.elements'
//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

// Features:
//  - Can ignore certain parameters (i.e. ignoring image allows a placeholder image, ignoring description removes it)
//  - Can render a React component in the description
const InfoSection = ({ imgStart = true, description = "", headline = "", topLine = "", img = "", alt = "No alt specified. Might be placeholder.", showIframe = false, showSchedule = false, isAnnouncement = false}) => {
  //Stores all the announcements
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [picture, setPicture] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true});
      
    //Get data from database
    Axios.get('http://localhost:5000/announcements/').then((response) => {
      setTitle(response.data[response.data.length-1].title)
      setDesc(response.data[response.data.length-1].description)
      setPicture(response.data[response.data.length-1].picture)
      setDate(response.data[response.data.length-1].date.substring(0, 10))
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  console.log(title);
  console.log(desc);
  console.log(picture);

  if (isAnnouncement === true){
    topLine = title;
    description = desc;
    img = picture;
  }

  return (
    <InfoSec>
      <Container>
        {(headline !== "") ? <Heading>{headline}</Heading> : <></>}
 
        <InfoRow imgStart={imgStart}>
          <InfoColumn data-aos='fade-left'>
            {showSchedule ? <iframe title="Schedule" src="https://docs.google.com/document/d/e/2PACX-1vQv81P3gR8B6YcrvXmoIafzlx4fEeNjgkAEBFcw_sP3gkNRBlvU7LAIgcTTLIujToPpYcu1eIlmZP-Q/pub?embedded=true" style={{border: 0, margin: 0}} width="100%" height="600"></iframe> : 
              <TextWrapper>
                {topLine !== "" ? <TextHeading>{topLine}</TextHeading> : <></>}
                {isAnnouncement ? <TextHeading style={{fontSize:'12px'}}>{date}</TextHeading> : <></>}

                {
                  // check if description will be ignored
                  (description !== "") ? 
                    // check if description is a react component or a string
                    (typeof(description) === "string") ?
                      <MainText>{description}</MainText> 
                    : <>{description}</>
                  : <></>
                }
              </TextWrapper>
            }
          </InfoColumn>
          <InfoColumn data-aos='fade-right'>
              {showIframe ? <iframe title="Calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=Y19jbGFzc3Jvb21lZmUzOWZkNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230047a8&amp;showNav=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0" style={{border: 0}} width="100%" height="600" scrolling="no"></iframe> : 
              <Img src={img} alt={alt} />}
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default InfoSection

