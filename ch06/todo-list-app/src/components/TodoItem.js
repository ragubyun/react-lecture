import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.no !== nextProps.no) || (this.props.done !== nextProps.done)
    }
    
    render() {
        console.log('render TodoItem')
        let itemClassName = 'list-group-item'
        if (this.props.done) {
            itemClassName += ' list-group-item-success'
        }
        return (
            <li className={itemClassName}>
                <span className={this.props.done ? 'todo-done pointer' : 'pointer'}
                      onClick={() => this.props.toggleDone(this.props.no)}>
                      {this.props.todo} {this.props.done ? '(완료)' : ''}
                </span>
                <span className="pull-right badge pointer"
                      onClick={() => this.props.deleteTodo(this.props.no)}>
                      DELETE
                </span>
            </li>
        );
    }
}

TodoItem.propTypes = {
    no: PropTypes.number.isRequired,
    todo: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleDone: PropTypes.func.isRequired
};

export default TodoItem;