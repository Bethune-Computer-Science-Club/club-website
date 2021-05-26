import React, { useState, useEffect } from 'react'
import { ReadData } from '../../databaseFunctions/ReadData'

import Announcement from './Announcement'
//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

// ignoreMaxLimits : boolean; 
// true: Will show arrows, follow maxShowAnnouncements, use react-spring for exit/unmount animation. 
// false: will not show arrows, ignores maxShowAnnouncements, shows all announcements, use AOS only
const Announcements = ({ displayOnlyFirstAnnouncement = true }) => {
  const [announcements, setAnnouncements] = useState(null);

  useEffect(() => { //Get the announcements in the database on first render
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true });

    //Get data from database
    ReadData('announcements', 'createdAt', 'desc').then((document) => setAnnouncements(document));
  }, [])

  const formatDate = (date) => {
    date = date.toDate().toDateString().substring(4, 15);
    return date.substring(0, 6) + ',' + date.substring(6, 11);
  }

  const renderAnnouncements = () => {
    if (announcements !== null) {
      console.log("here", announcements)
      if (displayOnlyFirstAnnouncement === true) {
        return <Announcement title={announcements[0].title} date={formatDate(announcements[0].createdAt)} description={announcements[0].description} picture={announcements[0].picture} renderHeadingAndLink={true}></Announcement>;
      }
      else if (displayOnlyFirstAnnouncement === false) {
        return (
          announcements.map((announcement) => {
            return (
              <Announcement title={announcement.title} date={formatDate(announcement.createdAt)} description={announcement.description} picture={announcement.picture} renderHeadingAndLink={false}></Announcement>
            )
          })
        )
      }
    }
    return null
  }

  return (
    <>
      {renderAnnouncements()}
    </>

  )
}

export default Announcements
