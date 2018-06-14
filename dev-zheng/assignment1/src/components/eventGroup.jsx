import React, { Component } from 'react';
import Event from './event.jsx';
import './eventGroup.css';

class EventGroup extends Component {
  constructor(props){
  	super(props);
  }

  render() {
    let { eventGroup } = this.props;

    return(
      <div className="event-group">
        <div className="event-group-header">
          <span>{ eventGroup.day }</span>
        </div>
        <div className="events">
          {
            eventGroup.events.map(event => <Event event={ event }/>)
          }
        </div>
      </div>
    );
  }
}

export default EventGroup;
