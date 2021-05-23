import React from 'react'
import Announcements from '../../components/Announcements/Announcements'

import { StartingSection } from '../../components'

const AnnouncementsPage = () => {
  return (
    <>
      <StartingSection
        headingText={"Announcements"}
        descriptionText={"All the announcements from Bethune CS Club."}
      ></StartingSection>

      <Announcements redirectToAnnouncementsPage={false} ignoreMaxLimits={true}></Announcements>
    </>
  )
}

export default AnnouncementsPage
