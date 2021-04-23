import React from 'react';
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import { useTheme } from 'styled-components';

const API_KEY = "AIzaSyCjJfLcun5QNfceN5-WU79LmbRWuKe3Veg";
let calendars = [
  {calendarId: "c_classroomefe39fd5@group.calendar.google.com"},
  {
    calendarId: "c_classroomefe39fd5@group.calendar.google.com",
    color: "#B241D1", //optional, specify color of calendar 2 events
  }
];

const CalendarComp = () => {
  const theme = useTheme();

  let styles = {
    //you can use object styles (no import required)
    calendar: {
      borderWidth: "3px", //make outer edge of calendar thicker
    },
    
    //you can also use emotion's string styles
    today: css`
      /* highlight today by making the text red and giving it a red border */
      color: red;
    `,
    day: css `
      font-weight: bold;
      color: ${theme.textColor};
    `
  }

  console.log(theme.textColor)
  return (
    <div> 
      <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} showFooter={false}/>
    </div>
  )
}

export default CalendarComp
