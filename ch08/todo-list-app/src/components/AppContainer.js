import App from './App'
import TodoActionCreator from '../redux/TodoActionCreator'
import { connect } from 'react-redux'
import TimeActionCreator from '../redux/TimeActionCreator';

const mapStateToProps = state => {
    return {
        todoList: state.todoList,
        currentTime: state.currentTime
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => dispatch(TodoActionCreator.addTodo(todo)),
        deleteTodo: no => dispatch(TodoActionCreator.deleteTodo(no)),
        toggleDone: no => dispatch(TodoActionCreator.toggleDone(no)),
        changeTime: () => dispatch(TimeActionCreator.changeTime())
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer