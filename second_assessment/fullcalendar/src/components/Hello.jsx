import React, { Component } from 'react';

class Hello extends Component {
    render () {
        return (
            <div>
                <h2>Hi, { this.props.names }</h2>
            </div>
        )
    }
}

export default Hello;