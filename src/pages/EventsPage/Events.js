import React from 'react'
import { StartingSectionParameters, eventObjOne, eventObjTwo, eventObjThree } from './Data'
import { EventsSection } from '../../components'
import { StartingSection } from '../../components'

const Events = () => {
  return (
    <>
      <StartingSection {...StartingSectionParameters} />
      <EventsSection {...eventObjOne} />
      <EventsSection {...eventObjTwo} />
      <EventsSection {...eventObjThree} />
    </>
  )
}

export default Events
