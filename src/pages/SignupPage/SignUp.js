import React from 'react'
import { StartingSection, SignUp } from '../../components'
import { StartingSectionParameters } from './Data'

//------------------
//THIS PAGE WILL NOT BE PUBLISHED. ONLY USED FOR DEVELOPMENT AND DEBUGGING PURPOSES
//------------------

const Admin = () => {
  return (
    <>
      <StartingSection {...StartingSectionParameters} />
      <SignUp />
    </>
  )
}

export default Admin
