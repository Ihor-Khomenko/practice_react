import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  React.createElement(
    "div",
     { style: { color: "blue" } },
     React.createElement("li", null, "Sandwiches")),
  document.getElementById('root')
);