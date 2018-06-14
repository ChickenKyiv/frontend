import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimeLine from './components/timeline.jsx';
import EventGroup from './components/eventGroup.jsx';

const timelines = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00']
const events = [
  {
    day: 'Monday',
    events: [
      {
        start_time: '09:30',
        end_time: '10:30',
        color: '#577F92',
        name: 'Abs Circuit'
      },
      {
        start_time: '11:00',
        end_time: '12:30',
        color: '#443453',
        name: 'Rowing Workout'
      },
      {
        start_time: '14:00',
        end_time: '15:15',
        color: '#A2B9B2',
        name: 'Yoga Level1'
      },
    ]
  },
  {
    day: 'Tuesday',
    events: [
      {
        start_time: '10:00',
        end_time: '11:00',
        color: '#443453',
        name: 'Rowing Workout'
      },
      {
        start_time: '11:30',
        end_time: '13:00',
        color: '#f6b067',
        name: 'Restorative Yoga'
      },
      {
        start_time: '13:30',
        end_time: '15:00',
        color: '#577F92',
        name: 'Abs Circuit'
      },
      {
        start_time: '15:45',
        end_time: '16:45',
        color: '#A2B9B2',
        name: 'Yoga Level1'
      },
    ]
  },
  {
    day: 'Wednesday',
    events: [
      {
        start_time: '09:00',
        end_time: '10:15',
        color: '#f6b067',
        name: 'Restorative Yoga'
      },
      {
        start_time: '10:45',
        end_time: '11:45',
        color: '#A2B9B2',
        name: 'Yoga Level1'
      },
      {
        start_time: '12:00',
        end_time: '13:45',
        color: '#443453',
        name: 'Rowing Workout'
      },
      {
        start_time: '13:45',
        end_time: '15:00',
        color: '#A2B9B2',
        name: 'Yoga Level1'
      },
    ]
  },
  {
    day: 'Thursday',
    events: [
      {
        start_time: '09:30',
        end_time: '10:30',
        color: '#577F92',
        name: 'Abs Circuit'
      },
      {
        start_time: '12:00',
        end_time: '13:45',
        color: '#f6b067',
        name: 'Restorative Yoga'
      },
      {
        start_time: '15:30',
        end_time: '16:30',
        color: '#577F92',
        name: 'Abs Circuit'
      },
      {
        start_time: '17:00',
        end_time: '18:30',
        color: '#443453',
        name: 'Rowing Workout'
      },
    ]
  },
  {
    day: 'Friday',
    events: [
      {
        start_time: '10:00',
        end_time: '11:00',
        color: '#443453',
        name: 'Rowing Workout'
      },
      {
        start_time: '12:30',
        end_time: '14:00',
        color: '#577F92',
        name: 'Abs Circuit'
      },
      {
        start_time: '15:45',
        end_time: '16:45',
        color: '#A2B9B2',
        name: 'Yoga Level1'
      },
    ]
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="time-lines">
          {
            timelines.map((timeline, index) => <TimeLine time={ timeline } key={ index } index={ index }/>)
          }
        </div>
        <div className="events-block">
          {
            events.map(event => <EventGroup eventGroup={ event } />)
          }
        </div>
      </div>
    );
  }
}

export default App;
