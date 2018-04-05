import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        console.log('render TodoList')
        const items = this.props.todoList.map(item => {
            return (
                <TodoItem key={item.no}
                          {...item}
                          deleteTodo={this.props.deleteTodo}
                          toggleDone={this.props.toggleDone} />
            )
        })
        return (
            <div className="row">
                <ul className="list-group">
                    {items}
                </ul>
            </div>
        );
    }
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.object),
    deleteTodo: PropTypes.func.isRequired,
    toggleDone: PropTypes.func.isRequired
};

export default TodoList;