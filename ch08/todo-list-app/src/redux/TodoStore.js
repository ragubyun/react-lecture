import { createStore, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';
import reduxThunk from 'redux-thunk'

const logger = store => next => action => {
    console.log(`[log] action: ${new Date().toLocaleTimeString()}, ${JSON.stringify(action)}`)
    return next(action)
}

const TodoStore = createStore(RootReducer, applyMiddleware(logger, reduxThunk));
export default TodoStore;