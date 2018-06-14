import React, { Component } from 'react';
import './event.css';

class Event extends Component {
  constructor(props){
  	super(props);
  }

  getStyle() {
    let { top, height } = this.calculateBorder();

    return Object.assign({},
      {
        position: 'absolute',
        top: top,
        height: height,
        width: '100%',
        backgroundColor: this.props.event.color,
        cursor: 'pointer'
      }
    )
  }

  calculateBorder() {
    let { start_time, end_time } = this.props.event;
    let start = 100 * ((parseInt(start_time.split(':')[0])-9) +  (parseInt(start_time.split(':')[1])/60.0));
    let end = 100 * ((parseInt(end_time.split(':')[0])-9) +  (parseInt(end_time.split(':')[1])/60.0));
    return {top: start, height: end-start};
  }

  openModal() {
    this.props.openModal(this.props.groupIndex, this.props.eventIndex);
  }

  render() {
    let { event } = this.props;
    return (
      <div className="event" style={this.getStyle()} onClick={() => this.openModal()}>
        <div className="event-content">
          <span className="event-date">{this.props.event.start_time} - {this.props.event.start_time}</span>
          <span className="event-name">{this.props.event.name}</span>
        </div>
      </div>
    )
  }
}

export default Event;
