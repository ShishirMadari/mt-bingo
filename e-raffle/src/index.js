import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ERaffle from './workflows/eRaffle/ERaffle'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ERaffle />, document.getElementById('root'));
registerServiceWorker();
