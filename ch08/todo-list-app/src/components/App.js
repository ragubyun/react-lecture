import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTodo from './InputTodo'
import TodoList from './TodoList'
import MyTime from './MyTime'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="well">
                    <div className="title">
                        :: Todo List App
                    </div>
                </div>
                <div className="panel panel-default panel-borderless">
                    <div className="panel-body">
                        <InputTodo addTodo={this.props.addTodo} />
                        <TodoList todoList={this.props.todoList}
                                deleteTodo={this.props.deleteTodo}
                                toggleDone={this.props.toggleDone} />
                    </div>
                </div>
                <MyTime changeTime={this.props.changeTime} currentTime={this.props.currentTime} />
            </div>
        );
    }
}

App.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.object),
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleDone: PropTypes.func.isRequired,
    currentTime: PropTypes.object.isRequired,
    changeTime: PropTypes.func.isRequired
};

export default App;