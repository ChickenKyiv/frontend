import React, { Component } from 'react';
import logo       from './logo.svg';
import TimeLine   from './components/timeline/timeline.jsx';
import EventGroup from './components/events/eventGroup.jsx';
import Modal from 'react-responsive-modal';
import { timelines, events } from './data.js';
import './App.css';

let groupIndex, eventIndex;
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
        <Modal open={this.state.isOpen} onClose={() => this.onCloseEventModal()} center>
          {
            (groupIndex !== undefined && eventIndex !== undefined && this.state.isOpen) &&
            <div className="event-modal">
              <div className="event-info" style={{backgroundColor: events[groupIndex]['events'][eventIndex]['color']}}>
                <span>{events[groupIndex]['events'][eventIndex]['start_time']} - {events[groupIndex]['events'][eventIndex]['end_time']}</span>
                <p>{events[groupIndex]['events'][eventIndex]['name']}</p>
              </div>
              <div className="event-description">
                <span>
                  {events[groupIndex]['events'][eventIndex]['description']}
                </span>
              </div>
            </div>
          }
        </Modal>
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
