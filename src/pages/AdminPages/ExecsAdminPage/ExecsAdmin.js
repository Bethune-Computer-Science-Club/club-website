import React from 'react'
import { ExecsAdmin, StartingSection } from '../../../components'
import Admin from '../../../images/admin.png'

const ExecsAmn = () => {
  return (
    <>
      <StartingSection {...{
        headingText: 'Edit Execs',
        image: Admin,
        descriptionText: "Here you can edit the profiles of club executives"}} />
      <ExecsAdmin />
    </>
  )
}

export default ExecsAmn
