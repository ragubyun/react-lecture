import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import AppContainer from './components/AppContainer';
import TodoStore from './redux/TodoStore'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={TodoStore}>
        <AppContainer />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
