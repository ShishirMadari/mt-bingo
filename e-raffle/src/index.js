import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RafflePage from './workflows/RafflePage/RafflePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RafflePage />, document.getElementById('root'));
registerServiceWorker();
