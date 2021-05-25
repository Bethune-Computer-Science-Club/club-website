import React from 'react'
import { AnnouncementsAdmin, StartingSection } from '../../../components'
import Admin from '../../../images/admin.png'

const AnnouncementsAmn = () => {
  return (
    <>
      <StartingSection {...{
        headingText: 'Edit Announcements',
        image: Admin,
        descriptionText: "Add and edit announcments on this page"}} />
      <AnnouncementsAdmin />
    </>
  )
}

export default AnnouncementsAmn
