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

module.exports = {
  timelines: timelines,
  events: events
}
