import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FullCalendar from 'fullcalendar-reactwrapper';  // fullcalendar-reactwrapper.
import Events from './Events'; //description Event static json data

import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
import "./Calendar.css";


class Calendar extends React.Component {
    constructor(props) {
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
        events: Events,
        allDaySlot: false,
        selectHelper: true,
        droppable: true,
        selectable: true,
        editable: true,
        firstDay: 1, //  1(Monday) this can be changed to 0(Sunday) for the USA system
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
        }
        this.handleClick = this.handleClick.bind(this);
      }




      componentDidMount () {
        this.handleClick();
      }
/***************************onSelect event handler****************** */
      handleClick() {
        let title = prompt('Event Title:');
        if (title) {
            this.setState({
                title: title,
            });
        }
      }
/**************************** test Event handler******************** */

      test() {
        let title = prompt('Event Title:');
      }
 /********************************************************************/
      render() {
        return (
            /******************************************************** */
            <div onClick={this.test}>
            {/*************************** test Event trigger **********/}

            <FullCalendar
                 id = "calendar"
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
                selectable
                droppable
                /********************************************************************** */
                /*************************** this drop and select Event doesn't happen **/
                //  onSelect = {this.handleClick}
                //  onDrop= {function() {
                //     // is the "remove after drop" checkbox checked?
                //     if ($('#drop-remove').is(':checked')) {      //////////// How to deal jquery syntax like $('#drop-remove')?
                //         // if so, remove the element from the "Draggable Events" list
                //         $(this).remove();
                //     }
                // }}
                /************************************************************************ */
                /** In the Fullcalendar component, any event does not happen.             */
                /************************************************************************ */
            />
            </div>
        );
    }
}


export default Calendar;
