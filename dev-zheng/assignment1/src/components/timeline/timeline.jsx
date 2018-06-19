import React, { Component } from 'react';
import './timeline.css';

class TimeLine extends Component{
  constructor(props){
  	super(props);

  }

  render() {
    let { time } = this.props;
    return (
      <div className="time-line">
        {
          this.props.index % 2 === 0 && <span className="time">{ time }</span>
        }
        <hr/>
      </div>
    );
  }
}

export default TimeLine;
