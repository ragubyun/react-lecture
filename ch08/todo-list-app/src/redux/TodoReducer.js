import Constant from '../Constant'
import produce from 'immer'

const initialState = {
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

const TodoReducer = (todoList = initialState.todoList, action) => {
    let index, newTodo, newTodoList
    switch(action.type) {
        case Constant.ADD_TODO:
            newTodo = { no: new Date().getTime(), todo:action.payload.todo, done:false };
            newTodoList = produce(todoList, draft => {
                draft.push(newTodo)
            })
            return newTodoList;
        case Constant.DELETE_TODO:
            index = todoList.findIndex((todo) => todo.no === action.payload.no)
            newTodoList = produce(todoList, draft => {
                draft.splice(newTodo, 1)
            })
            return newTodoList;
        case Constant.TOGGLE_DONE:
            index = todoList.findIndex((todo) => todo.no === action.payload.no)
            newTodoList = produce(todoList, draft => {
                draft[index].done = !todoList[index].done;
            })
            return newTodoList;
        default:
            return todoList;
    }
}

export default TodoReducer