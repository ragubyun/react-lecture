import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About {this.props.title}</h1>
            </div>
        );
    }
}

export default About;