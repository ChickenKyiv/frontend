import React, { Component } from 'react';
import TimeLine   from '../timeline/timeline.jsx';
import EventGroup from '../events/eventGroup.jsx';
import EventModal from '../common/eventModal.jsx';
import { timelines, events } from '../../data/data.js';
import './App.css';

let groupIndex = undefined, eventIndex = undefined;
class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      isOpen: false
    };
  }

  onOpenEventModal = (gIndex, eIndex) => {
    groupIndex = gIndex;
    eventIndex = eIndex;
    this.setState({isOpen: true});
  }

  onCloseEventModal = () => {
    this.setState({isOpen: false});
  }

  render() {
    return (
      <div className="App">
        {
          (groupIndex !== undefined && eventIndex !== undefined && this.state.isOpen) && <EventModal isOpen={this.state.isOpen} eventData={ events[groupIndex]['events'][eventIndex] } onCloseEventModal={this.onCloseEventModal} />
        }
        <div className="time-lines">
          {
            timelines.map((timeline, index) => <TimeLine time={ timeline } key={ index } index={ index } />)
          }
        </div>
        <div className="events-block">
          {
            events.map((event, index) => <EventGroup eventGroup={ event } openModal={this.onOpenEventModal} key={ index } index={ index }/>)
          }
        </div>
      </div>
    );
  }
}

export default App;
