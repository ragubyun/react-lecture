import { Dispatcher } from 'flux'
import Constant from './Constant'

class AppDispatcher extends Dispatcher {
    dispatch(action) {
        super.dispatch(action)
        if (action.type !== Constant.CHANGE_NAME) {
            console.log(`[log] ## dispatch: ${action.type}, ${JSON.stringify(action.payload)}`)
        }
    }
}

export default new AppDispatcher()