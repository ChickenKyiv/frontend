import React, { Component } from 'react';
import './Hello.css';
class Hello extends Component {
    render () {
        return (
            <div className="Hello-title">
                <h2>Hi, { this.props.names }</h2>
            </div>
        )
    }
}

export default Hello;