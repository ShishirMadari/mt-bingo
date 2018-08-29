import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ERaffle from './workflows/eRaffle/ERaffle';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/configureStore';
import './index.css';



let initStore = store();


ReactDOM.render(
    <Provider store={initStore}>
        <ERaffle />
    </Provider>
    , document.getElementById('root'));



registerServiceWorker();
