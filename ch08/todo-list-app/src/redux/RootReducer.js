import { combineReducers } from 'redux';
import TimeReducer from './TimeReducer';
import TodoReducer from './TodoReducer';

const RootReducer = combineReducers({ currentTime : TimeReducer, todoList: TodoReducer })

export default RootReducer;