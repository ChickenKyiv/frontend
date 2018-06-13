import React from 'react';
import ReactDOM from 'react-dom';

import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import './Calendar.css';

import FullCalendar from 'fullcalendar-reactwrapper';

class Calendar extends React.Component {
    constructor (props) {
        super(props);
        var today = new Date();
        var y     = today.getFullYear();
        var m     = today.getMonth();
        var d     = today.getDate();

        this.state = {
            editable: true,
            firstDay: 1, //  1(Monday) this can be changed to 0(Sunday) for the USA system
            selectable: true,
            defaultView: 'month',

            axisFormat: 'h:mm',
            columnFormat: {
                month: 'ddd',    // Mon
                week: 'ddd d', // Mon 7
                day: 'dddd M/d',  // Monday 9/7
                agendaDay: 'dddd d'
            },
            titleFormat: {
                month: 'MMMM yyyy', // September 2009
                week: "MMMM yyyy", // September 2009
                day: 'MMMM yyyy'                  // Tuesday, Sep 8, 2009
            },
            allDaySlot: false,
            selectHelper: true,
            droppable: true,
            events: [
                    {
                        title: 'All Day Event',
                        start: new Date(y, m, 1)
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: new Date(y, m, d-3, 16, 0),
                        allDay: false,
                        className: 'info'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: new Date(y, m, d+4, 16, 0),
                        allDay: false,
                        className: 'info'
                    },
                    {
                        title: 'Meeting',
                        start: new Date(y, m, d, 10, 30),
                        allDay: false,
                        className: 'important'
                    },
                    {
                        title: 'Lunch',
                        start: new Date(y, m, d, 12, 0),
                        end: new Date(y, m, d, 14, 0),
                        allDay: false,
                        className: 'important'
                    },
                    {
                        title: 'Birthday Party',
                        start: new Date(y, m, d+1, 19, 0),
                        end: new Date(y, m, d+1, 22, 30),
                        allDay: false,
                    },
                    {
                        title: 'Click for Google',
                        start: new Date(y, m, 28),
                        end: new Date(y, m, 29),
                        url: 'http://google.com/',
                        className: 'success'
                    }
                ],
        }

    }

    render() {
        return (
            <div id="example-component">
              <FullCalendar
                   id = "your-custom-ID"
                  header = {{
                      left: 'title',
                      center: 'month,basicWeek,basicDay',
                      right: 'prev,next today myCustomButton',
                  }}
                  defaultDate={'2017-09-12'}
                  navLinks= {true} // can click day/week names to navigate views
                  editable= {true}
                  eventLimit= {true} // allow "more" link when too many events
                  events = {this.state.events}
                  droppable = {true}
              />
          </div>
        );
    }
}


export default Calendar;
