import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const ical = require('cal-parser');

const myCalendarString = require('https://calendar.google.com/calendar/u/1?cid=Y19jbGFzc3Jvb21lZmUzOWZkNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t')
const parsed = ical.parseString(myCalendarString);


const CalendarComp = () => {

  // Read Calendar Metadata
  console.log(parsed.calendarData);

  // Read Events
  console.log(parsed.events);

  return (
    <div> 
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'Meeting - Python beginners', date: '2021-04-01' },
          { title: 'Meeting - CCC prep', date: '2021-04-02' }
        ]}
      />
    </div>
  )
}

export default CalendarComp
