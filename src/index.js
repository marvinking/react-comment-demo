import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CommnetApp from './CommentApp'

ReactDOM.render(<CommnetApp />, document.getElementById('root'));
registerServiceWorker();
