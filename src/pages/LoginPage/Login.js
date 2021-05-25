import React from 'react'
import { StartingSection, Login } from '../../components'
import { StartingSectionParameters } from './Data'

const Admin = () => {
  return (
    <>
      <StartingSection {...StartingSectionParameters} />
      <Login />
    </>
  )
}

export default Admin
