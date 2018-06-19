import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class EventModal extends Component {
  constructor(props){
  	super(props);
  }

  render() {
    let { isOpen, eventData, onCloseEventModal } = this.props;
    return (
      <Modal open={isOpen} onClose={() => onCloseEventModal()} center>
        {
          <div className="event-modal">
            <div className="event-info" style={{backgroundColor: eventData['color']}}>
              <span>{eventData['start_time']} - {eventData['end_time']}</span>
              <p>{eventData['name']}</p>
            </div>
            <div className="event-description">
              <span>
                {eventData['description']}
              </span>
            </div>
          </div>
        }
      </Modal>
    );
  }
}

export default EventModal;
