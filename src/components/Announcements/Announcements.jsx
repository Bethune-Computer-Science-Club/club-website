// This item is connected to InfoSection and Arrows.
// Any changes made there will also be reflected in this component.

import React, {useState, useEffect, useRef} from 'react'
// import {useTransition, animated} from 'react-spring'

import Arrows from '../Arrows/Arrows'

import {
  AnnouncementSection,
  Background,
  BigText,
  Text,
  PageLink,
  DynamicHeightUpdater
} from './Announcements.elements'

import { ReadData } from '../../databaseFunctions/ReadData'

//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

import CCCLogo from '../../images/cccLogo.png'
import { Container } from '../../globalStyles'

// ignoreMaxLimits : boolean; 
// true: Will show arrows, follow maxShowAnnouncements, use react-spring for exit/unmount animation. 
// false: will not show arrows, ignores maxShowAnnouncements, shows all announcements, use AOS only
const Announcements = ({redirectToAnnouncementsPage = true, maxShowAnnoucements = 2, ignoreMaxLimits = false}) => {

  const [height, setHeight] = useState(0)
  const announcementsBody = useRef()

  useEffect(() => {
    setHeight(announcementsBody.current.clientHeight)
  })

  // false: show most recent announcement.
  // true: show up to {maxShowAnnoucements}. Show redirect if len(announcements) > maxShowAnnoucements
  const [showUpToMaxAnnouncements, toggleShowAnnouncements] = useState(ignoreMaxLimits);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => { //Get the announcements in the database on first render
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true});

    //Get data from database
    ReadData('announcements', 'createdAt', 'desc').then((document) => setAnnouncements(document));
  }, [])


  // sets showingAnnouncements to its proper values; then returns it
  function getAnnouncements(){

    console.log("announcements", announcements)
    let modifiedAnnouncements = [];

    try{
      if ((announcements.length === 1) && (!ignoreMaxLimits)) {
    
        let dateVar;
        let dateWithCommas = 'Loading...';
        dateVar = announcements[0].createdAt.toDate().toDateString().substring(4, 15);
        dateWithCommas = dateVar.substring(0, 6) + ',' + dateVar.substring(6, 11);

        modifiedAnnouncements = [
          {
            title: announcements[0].title,
            description: announcements[0].description,
            picture: announcements[0].picture,
            date: dateWithCommas,
          }
        ]

      }
      else if (announcements.length > 1){

        modifiedAnnouncements = announcements.map(({title = "No title.", description = "No description.", picture = CCCLogo, date = "No date."}) => {
          
            let dateVar = date;
            let dateWithCommas = 'Loading...';
            dateVar = announcements[0].createdAt.toDate().toDateString().substring(4, 15);
            dateWithCommas = dateVar.substring(0, 6) + ',' + dateVar.substring(6, 11);

            return(
              {
                title: title,
                description: description,
                picture: picture,
                date: dateWithCommas,
              }
            )
        })

      }
      else if (announcements.length === 0){
        console.log("WARN: No Announcements?!?!")
        modifiedAnnouncements = [
          {
            title: "WARN: No Announcements?!?!",
            description: "The database might be down. Either that or we have no announcements :((((",
          }
        ]
      }
    }
    catch{
  
      console.log("Caught database error! This is normal if the announcements are loading. Ignore if this error only appears once.")
      modifiedAnnouncements = [
        {
          title: "ERR: Database ERR",
          description: "The database might be down. One way of fixing this is if you are using HTTPS Everywhere is to go into the settings and disable 'Encrypt All Sites Eligible'.",
        }
      ]
    }

    // setShowingAnnouncements(modifiedAnnouncements);
    // console.log("showingAnnouncements: ", showingAnnouncements)
    // return(showingAnnouncements);
    // console.log("modifiedAnnouncements", modifiedAnnouncements)

    if (!showUpToMaxAnnouncements){
      modifiedAnnouncements=[modifiedAnnouncements[0]]
    }

    // shrink modifiedAnnouncements if maxShowAnnoucements < len(modifiedAnnouncements)
    if (modifiedAnnouncements.length > maxShowAnnoucements && !showUpToMaxAnnouncements && !ignoreMaxLimits){
      for (let poppedTimes = 0; poppedTimes < modifiedAnnouncements.length - maxShowAnnoucements; poppedTimes ++){
        modifiedAnnouncements.pop();
      }
    }

    return modifiedAnnouncements;
  }

  return (<>

    <Background>
      <div ref={announcementsBody}>
        <Container style={{marginBottom: "50px"}}>
          <BigText>Announcements</BigText>
        </Container>
        {
          // All the actual announcements.
          getAnnouncements().map((announcement) => {
            return(
              <AnnouncementSection {... announcement} ignoreMaxLimits={ignoreMaxLimits}></AnnouncementSection>
            )
          })
        }
        {
          // The part with arrows and 'See all Announcements'
          (announcements.length > 1 && !ignoreMaxLimits) ? 

            <div style={{display:"flex", justifyContent: "space-evenly", marginTop: "50px"}}>
              <div data-aos="fade-in" style={{cursor: "pointer"}} onClick={() => toggleShowAnnouncements(!showUpToMaxAnnouncements)}>
                <DynamicHeightUpdater></DynamicHeightUpdater>
                <Arrows showContent={showUpToMaxAnnouncements}></Arrows>
              </div>
              {
                (announcements.length > maxShowAnnoucements && redirectToAnnouncementsPage) ?
                  <PageLink to='./announcements'>
                    <BigText> See all Announcements </BigText>
                  </PageLink>
                :
                  <></>
              }
            </div>
          :
            <></>
        }
      </div>
    </Background>

  </>)
}

export default Announcements
