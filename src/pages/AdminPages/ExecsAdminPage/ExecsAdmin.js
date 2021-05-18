import React from 'react'
import { ExecsAdmin, StartingSection } from '../../../components'

const ExecsAmn = () => {
  return (
    <>
      <StartingSection {...{
        headingText: 'Edit Execs',
        descriptionText: "Here you can edit the profiles of club executives"}} />
      <ExecsAdmin />
    </>
  )
}

export default ExecsAmn
