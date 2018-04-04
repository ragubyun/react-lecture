import React, { Component } from 'react';
import App from './App'
import produce from 'immer'

class AppContainer extends Component {
    constructor() {
        super();
        this.state = {
            todoList: [
                {
                    no: 1,
                    todo: 'study React.js',
                    done: false
                },
                {
                    no: 2,
                    todo: '점심먹기',
                    done: false
                }
            ]
        }
    }

    addTodo = todo => {
        const newTodoList = produce(this.state.todoList, draft => {
            draft.push({
                no: new Date().getTime(),
                todo: todo,
                done: false
            })
        })
        this.setState({todoList: newTodoList})
    }

    deleteTodo = no => {
        const index = this.state.todoList.findIndex(item => item.no === no)
        if (index !== -1) {
            const newTodoList = produce(this.state.todoList, draft => {
                draft.splice(index, 1)
            })
            this.setState({todoList: newTodoList})
        }
    }

    toggleDone = no => {
        const index = this.state.todoList.findIndex(item => item.no === no)
        if (index !== -1) {
            const newTodoList = produce(this.state.todoList, draft => {
                draft[index].done = !this.state.todoList[index].done
            })
            this.setState({todoList: newTodoList})
        }
    }

    render() {
        return (
            <App todoList={this.state.todoList}
                 addTodo={this.addTodo}
                 deleteTodo={this.deleteTodo}
                 toggleDone={this.toggleDone} />
        )
    }
}

export default AppContainer;