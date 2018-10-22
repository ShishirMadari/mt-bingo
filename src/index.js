import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MTbingo from './workflows/mtBingo/MTbingo';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/configureStore';
import './index.css';



let initStore = store();


ReactDOM.render(
    <Provider store={initStore}>
        <MTbingo />
    </Provider>
    , document.getElementById('root'));



registerServiceWorker();
