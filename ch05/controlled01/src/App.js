import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    change = (e) => {
        let newValue = parseInt(e.target.value, 10)
        newValue = isNaN(newValue) ? 0 : newValue
        if (e.target.id === 'x') {
            this.setState({x: newValue})
        } else if (e.target.id === 'y') {
            this.setState({y: newValue})
        }
    }
    
    render() {
        return (
            <div>
                x: <input type="text" id="x" value={this.state.x} onChange={this.change} /><br />
                y: <input type="text" id="y" value={this.state.y} onChange={this.change} /><br />
                result <span>{this.state.x + this.state.y}</span>
            </div>
        );
    }
}

export default App;