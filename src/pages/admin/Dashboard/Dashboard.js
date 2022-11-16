import React from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { INITIAL_EVENTS } from 'pages/FakeData';
import { createEventId } from 'Utils/Fullcalendar';

function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
}

function renderSidebarEvent(event) {
    return (
      <li key={event.id}>
        <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
        <i>{event.title}</i>
      </li>
    )
}

function RenderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
}

const state = {
    weekendsVisible: true,
    currentEvents: []
  }

function Dashboard(props) {
    const handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
    
        calendarApi.unselect() // clear date selection
    
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          })
        }
      }
    return (
        <div>   
            <FullCalendar
                plugins={[ resourceTimeGridPlugin, dayGridPlugin,  interactionPlugin]}
                // initialView="dayGridWeek"
                // plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                weekends={state.weekendsVisible}
                initialEvents={INITIAL_EVENTS}
                select={handleDateSelect}
            />
        </div>
    );
}

export default Dashboard;