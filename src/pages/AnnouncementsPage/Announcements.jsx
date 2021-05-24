import React from 'react'
import Announcements from '../../components/Announcements/Announcements'

import { StartingSection } from '../../components'
import { IoMegaphoneOutline } from 'react-icons/io5'

const AnnouncementsPage = () => {
  return (
    <>
      <StartingSection
        headingText={"Announcements"}
        image={<IoMegaphoneOutline size={70}></IoMegaphoneOutline>}
        descriptionText={"All the announcements from Bethune CS Club."}
      ></StartingSection>

      <Announcements redirectToAnnouncementsPage={false} ignoreMaxLimits={true}></Announcements>
    </>
  )
}

export default AnnouncementsPage
