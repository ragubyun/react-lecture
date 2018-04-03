import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        this.add = this.add.bind(this)
    }

    add () {
        this.setState({number: this.state.number + 1})
    }
    
    subtract = () => {
        this.setState({number: this.state.number - 1})
    }

    render() {
        return (
          <div className="well">
              <span className="input-group-btn">
                <button type="button" className="btn btn-primary" 
                  onClick={this.subtract}>
                  <span className="glyphicon glyphicon-minus"></span>
                </button>
                <button type="button" className="btn btn-primary" 
                  onClick={this.add}>
                  <span className="glyphicon glyphicon-plus"></span>
                </button>
                <input type="text" className="form-control input-number" value={this.state.number} />
              </span>
          </div>
        );
    }
}

export default App;