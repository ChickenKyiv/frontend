import React from 'react';
import $ from 'jquery';
import FullCalendar from 'fullcalendar-reactwrapper';  // fullcalendar-reactwrapper.
import Events from './Events'; //description Event static json data

import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
import "./Calendar.css";
import "./Custom.css";
 

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.jq = $.noConflict();
        this.state = {
            events: Events,
        };
        this.onEventSelect = this.onEventSelect.bind(this);
      }

/***************************onSelect event handler****************** */
    onEventSelect(ev) {
        const events = this.state.events;
        const title = prompt('Event Title:');
        const newEventsSource = events.concat({
            title: title,
            start: ev._d,
            end: (ev.add(1,'days'))._d,
        });
        if (title) {
            this.setState({
                events: newEventsSource,
            });
        }
      }

      onDropEventSelect () { 
       
        
    }

      render() {
        const option = {
            header: {
                left: 'title',
                center: 'basicDay,basicWeek,month',
                right: 'prev,next today myCustomButton',
            },
            defaultView: 'month',
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            selectable: true,
            droppable: true,
            events: this.state.events,
            firstDay: 1, //  1(Monday) this can be changed to 0(Sunday) for the USA system
            axisFormat: 'h:mm',
            allDaySlot: true,
            selectHelper: true,
            select: this.onEventSelect,
            drop: this.onDropEventSelect,
            start: this.state.start,
            end: this.state.end,
             
        }
        return (

            <FullCalendar
                 id = "calendar"
               {...option}
            />
        );
    }
}


export default Calendar;
