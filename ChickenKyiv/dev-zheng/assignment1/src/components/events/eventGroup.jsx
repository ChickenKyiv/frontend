import React, { Component } from 'react';
import Event from './event.jsx';
import './eventGroup.css';

class EventGroup extends Component {
  render() {
    let { eventGroup } = this.props;

    return(
      <div className="event-group">
        <div className="event-group-header">
          <span>{ eventGroup.day }</span>
        </div>
        <div className="events">
          {
            eventGroup.events.map((event, index) => <Event key={ index }
                                                           event={ event }
                                                           openModal={this.props.openModal}
                                                           groupIndex={this.props.index}
                                                           eventIndex={index}/>)
          }
        </div>
      </div>
    );
  }
}

export default EventGroup;
