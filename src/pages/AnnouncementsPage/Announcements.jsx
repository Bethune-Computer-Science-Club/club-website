import React from 'react'
import Announcements from '../../components/Announcements/Announcements'

import { StartingSection } from '../../components'
import AnnouncementsImg from './../../images/announcements.png'

const AnnouncementsPage = () => {
  return (
    <>
      <StartingSection
        headingText={"Announcements"}
        image={AnnouncementsImg}
        descriptionText={"All the announcements from Bethune CS Club"}
      ></StartingSection>

      <Announcements displayOnlyFirstAnnouncement={false}></Announcements>
    </>
  )
}

export default AnnouncementsPage
