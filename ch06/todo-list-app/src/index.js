import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import AppContainer from './components/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import registerObserver from 'react-perf-devtool'

registerObserver()
ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
