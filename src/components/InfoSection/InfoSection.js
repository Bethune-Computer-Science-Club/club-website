import React, { useEffect, useState } from 'react'
import { Container } from '../../globalStyles'
import { ReadData } from '../../databaseFunctions/ReadData'
import { CalendarComp } from '../../components'

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

  const [announcements, setAnnouncements] = useState();

  useEffect(() => { //Get the announcements in the database on first render
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true});
  
    //Get data from database
    async function fetchData() {
      await ReadData('announcements', 'createdAt', 'desc', setAnnouncements);
    }
    fetchData()

  }, [])

  useEffect(() => { //Set announcements when announcements array changes
    console.log("announcements", announcements)
    try{
      if (announcements) {
        setTitle(announcements[0].title)
        setDesc(announcements[0].description)
        setPicture(announcements[0].picture)
    
        let date;
        let dateWithCommas = 'Loading...';
        date = announcements[0].createdAt.toDate().toDateString().substring(4, 15);
        dateWithCommas = date.substring(0, 6) + ',' + date.substring(6, 11);
    
        setDate(dateWithCommas)
      }
    }
    catch{

      console.log("Caught database error!")
      setTitle("Database ERR")
      setDesc("The database might be down. One way of fixing this is if you are using HTTPS Everywhere is to go into the settings and disable 'Encrypt All Sites Eligible'.")
      setPicture()
    }
    
  }, [announcements])

  

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
            {showIframe ? <CalendarComp/> :
              <Img src={img} alt={alt} />}
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default InfoSection

