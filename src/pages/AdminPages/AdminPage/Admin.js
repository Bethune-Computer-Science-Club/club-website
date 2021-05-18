import React from 'react'
import { AdminSection, StartingSection } from '../../../components'
import {StartingSectionParameters} from './Data'

const Admin = () => {
  return (
    <>
      <StartingSection {...StartingSectionParameters} />
      <AdminSection />
    </>
  )
}

export default Admin
