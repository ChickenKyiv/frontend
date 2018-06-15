import React, {
  Component
} from 'react';
import logo       from './logo.svg';

import TimeLine   from './components/timeline.jsx';
import EventGroup from './components/eventGroup.jsx';
import Modal      from 'react-responsive-modal';

import './App.css';

const timelines = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00']
const events = [
  {
    day: 'Monday',
    events: [
      {
        start_time: '09:30',
        end_time: '10:30',
        color: '#577F92',
        name: 'Abs Circuit',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
      },
      {
        start_time: '11:00',
        end_time: '12:30',
        color: '#443453',
        name: 'Rowing Workout',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
      },
      {
        start_time: '14:00',
        end_time: '15:15',
        color: '#A2B9B2',
        name: 'Yoga Level1',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
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
        name: 'Rowing Workout',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
      },
      {
        start_time: '11:30',
        end_time: '13:00',
        color: '#f6b067',
        name: 'Restorative Yoga',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
      },
      {
        start_time: '13:30',
        end_time: '15:00',
        color: '#577F92',
        name: 'Abs Circuit',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
      },
      {
        start_time: '15:45',
        end_time: '16:45',
        color: '#A2B9B2',
        name: 'Yoga Level1',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
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
        name: 'Restorative Yoga',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
      },
      {
        start_time: '10:45',
        end_time: '11:45',
        color: '#A2B9B2',
        name: 'Yoga Level1',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
      },
      {
        start_time: '12:00',
        end_time: '13:45',
        color: '#443453',
        name: 'Rowing Workout',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
      },
      {
        start_time: '13:45',
        end_time: '15:00',
        color: '#A2B9B2',
        name: 'Yoga Level1',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
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
        name: 'Abs Circuit',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
      },
      {
        start_time: '12:00',
        end_time: '13:45',
        color: '#f6b067',
        name: 'Restorative Yoga',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
      },
      {
        start_time: '15:30',
        end_time: '16:30',
        color: '#577F92',
        name: 'Abs Circuit',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
      },
      {
        start_time: '17:00',
        end_time: '18:30',
        color: '#443453',
        name: 'Rowing Workout',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
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
        name: 'Rowing Workout',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
      },
      {
        start_time: '12:30',
        end_time: '14:00',
        color: '#577F92',
        name: 'Abs Circuit',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
      },
      {
        start_time: '15:45',
        end_time: '16:45',
        color: '#A2B9B2',
        name: 'Yoga Level1',
        description: 'Rowing Workout. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?'
      },
    ]
  }
]
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
