// This item is connected to InfoSection, Arrows, and LoadingCircle.
// Any changes made there will also be reflected in this component.

import React, {useState, useEffect} from 'react'
// import {useTransition, animated} from 'react-spring'
import { IoMegaphoneOutline } from 'react-icons/io5'

// import Arrows from '../Arrows/Arrows'
import LoadingCircle from '../LoadingCircle/LoadingCircle'

import {
  AnnouncementSection,
  Background,
  BigText,
  PageLink
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
const Announcements = ({redirectToAnnouncementsPage = true, maxShowAnnoucements = 3, ignoreMaxLimits = false}) => {

  // const [height, setHeight] = useState(0)
  const [isLoaded, toggleLoad] = useState(false)
  // const announcementsBody = useRef()

  setTimeout(() =>{
    toggleLoad(true)
  }, 2500)
  
  const [showUpToMaxAnnouncements, toggleShowAnnouncements] = useState(true);
  const [announcements, setAnnouncements] = useState([]);

  
  useEffect(() => { 
    // Do nothing; prevent a warning
    toggleShowAnnouncements(showUpToMaxAnnouncements);
  }, [showUpToMaxAnnouncements])

  useEffect(() => { //Get the announcements in the database on first render

    //Animate on Scroll
    Aos.init({ duration: 1000, once: true});

    //Get data from database
    ReadData('announcements', 'createdAt', 'desc').then((document) => setAnnouncements(document));
  }, [])


  // sets showingAnnouncements to its proper values; then returns it
  function getAnnouncements(){

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
        modifiedAnnouncements = [
          {
            title: "WARN: No Announcements?!?!",
            description: "The database might be down. Either that or we have no announcements :((((",
          }
        ]
      }
    }
    catch{
      modifiedAnnouncements = [
        {
          title: "ERR: Database ERR",
          description: "The database might be down. To try and fix this, you could try disabling browser extensions to check if they are blocking requests to the database.",
        }
      ]
    }
    if (!showUpToMaxAnnouncements){
      modifiedAnnouncements=[modifiedAnnouncements[0]]
    }

    if (modifiedAnnouncements.length > maxShowAnnoucements && !ignoreMaxLimits){
      while (maxShowAnnoucements < modifiedAnnouncements.length){
        modifiedAnnouncements.pop()
      }
    }

    return modifiedAnnouncements;
  }

  return (<>

    <Background>
      {
        (isLoaded) ?
          // <div ref={announcementsBody}>
          <div>
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
                    (announcements.length > maxShowAnnoucements && redirectToAnnouncementsPage) ?
                      <PageLink to='./announcements'>
                        <div style={{display: "flex", flexDirection:"column", alignItems:"center", justifyContent: "center"}}>
                          <BigText> See all Announcements </BigText>
                          <IoMegaphoneOutline size={70}></IoMegaphoneOutline>
                        </div>
                      </PageLink>
                    :
                      <></>
                  }
                </div>
              :
                <></>
            }
          </div>

        :
          <>
            <Container style={{marginBottom: "50px"}}>
              <BigText>Announcements</BigText>
            </Container>
            <div style={{display: "flex", justifyContent: "center"}}>
              <LoadingCircle text={"Loading..."}></LoadingCircle>
            </div>
          </>
      }
    </Background>

  </>)
}

export default Announcements
