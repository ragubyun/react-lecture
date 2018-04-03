import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super()
        this.state = { x: 0, y: 0, result: 0 };
    }
    
    add = () => {
        let x = parseInt(this.elemX.value, 10);
        let y = parseInt(this.elemY.value, 10);
        x = isNaN(x) ? 0 : x
        y = isNaN(y) ? 0 : y
        this.setState({ x: x, y: y, result: x + y });
    }

    render() {
        return (
            <div className="container">
                X : <input id="x" type="text" defaultValue={this.state.x}
                    ref={input => { this.elemX = input }} /><br />
                Y : <input id="y" type="text" defaultValue={this.state.y}
                    ref={input => { this.elemY = input }} /><br />
                <button onClick={this.add}>덧셈 계산</button><br/>
                결과 : <span>{this.state.result}</span>
            </div>
        )
    }
}

export default App;