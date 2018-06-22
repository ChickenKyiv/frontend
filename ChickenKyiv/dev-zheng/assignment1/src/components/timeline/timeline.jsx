import React, { Component } from 'react';
import { timelines } from '../../data/data.js';
import './timeline.css';

class TimeLine extends Component {

  render() {
    return (
      <div className="time-line">
        {
          this.props.index % 2 === 0 && <span className="time">{ timelines[this.props.index] }</span>
        }
        <hr/>
      </div>
    );
  }
}

export default TimeLine;
