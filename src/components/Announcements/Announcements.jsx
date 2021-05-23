import React, {useState, useEffect} from 'react'

import {
  AnnouncementSection
} from './Announcements.elements'

import { ReadData } from '../../databaseFunctions/ReadData'

//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

import CCCLogo from '../../images/cccLogo.png'

const Announcements = ({redirectToAnnouncementsPage = true, maxShowAnnoucements = 10}) => {

  // false: show most recent announcement.
  // true: show up to {maxShowAnnoucements}. Show redirect if len(announcements) > maxShowAnnoucements
  const [showUpToMaxAnnouncements, toggleAnnouncements] = useState(false);
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

  // sets showingAnnouncements to its proper values; then returns it
  function getAnnouncements(){

    //console.log("announcements", announcements)
    let modifiedAnnouncements = [];

    try{
      if (announcements.length === 1) {
    
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

        modifiedAnnouncements = 
          announcements.map(({title = "No title.", description = "No description.", picture = CCCLogo, date = "No date."}) => {
          
            let dateVar;
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
            //picture: CCCLogo,
            date: "No date."
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
          //picture: CCCLogo,
          date: "No date."
        }
      ]
    }

    // setShowingAnnouncements(modifiedAnnouncements);
    // console.log("showingAnnouncements: ", showingAnnouncements)
    // return(showingAnnouncements);
    // console.log("modifiedAnnouncements", modifiedAnnouncements)
    return (modifiedAnnouncements)
  }

  return (<>
    {
      getAnnouncements().map((announcement) => {
        return(
          <AnnouncementSection {... announcement}></AnnouncementSection>
        )
      })
    }
  </>)
}

export default Announcements
