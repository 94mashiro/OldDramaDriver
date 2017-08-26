import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './TodoStore'

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
