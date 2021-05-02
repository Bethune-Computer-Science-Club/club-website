import React, {useEffect, useState} from 'react'
import InfoSection from '../../components'
import Loader from '../../components/Loader/Loader'

// initialLoading:
// Set to '1' to skip loader animation.
function TemplatePage({initialLoading = 0}){
  const [timesLoaded, setLoading] = useState(initialLoading);

  useEffect(() => {
    setTimeout(() => {
      if (timesLoaded !== 1){
        setLoading(1);
      }
    }, 2150)
  })

  return(
    <>
      
      {
        (timesLoaded === 1) ? 
          
          <>
            {/* Page code here */}
          </>

        :
          <Loader></Loader>
      }
      
    </>
  )
}

export default TemplatePage