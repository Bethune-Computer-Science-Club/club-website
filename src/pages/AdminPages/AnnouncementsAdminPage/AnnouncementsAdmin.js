import React from 'react'
import { AnnouncementsAdmin, StartingSection } from '../../../components'

const AnnouncementsAmn = () => {
  return (
    <>
      <StartingSection {...{
        headingText: 'Edit Announcements',
        descriptionText: "Add and edit announcments on this page"}} />
      <AnnouncementsAdmin />
    </>
  )
}

export default AnnouncementsAmn
