import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

    addHandler = e => {
        this.props.addTodo(this.state.todo)
        this.setState({ todo: '' })
    }
    
    changeTodo = e => {
        this.setState({ todo: e.target.value })
    }
    
    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="input-group">
                        <input id="msg" name="msg" type="text"
                               className="form-control"
                               placeholder="input todo item"
                               value={this.state.todo}
                               onChange={this.changeTodo} />
                        <span className="btn btn-primary input-group-addon"
                              onClick={this.addHandler}>
                              ADD
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

InputTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default InputTodo;