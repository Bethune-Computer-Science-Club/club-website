//Progress Bar to show the progress of image uploads to firebase storage
import React from 'react'

export const ProgressBar = (progress) => {
  //Progress is passed in as an object and not a raw integer
  return (
    <div style={{width: progress.progress + '%', height: '5px', background: '#fa8023', marginTop: '20px'}}></div>
  )
}

export default ProgressBar