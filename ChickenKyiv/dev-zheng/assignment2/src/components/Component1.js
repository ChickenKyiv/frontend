import React, { Component } from 'react';
import './Component1.css';

class Component1 extends Component {
  render() {
    return (
      <div className="component1">
        <p>
          { this.props.data }
        </p>
      </div>
    );
  }
}

export default Component1
