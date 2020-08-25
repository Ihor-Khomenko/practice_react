import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Hello({library, message, number}) {
  return <div>
    <h1>Welcome to my {library}</h1>
  <p>{message}</p>
  <p>
    {number} total props on site
    </p>
  </div>;
}

ReactDOM.render(
  <Hello 
  library="Profile" 
  message="This is my profile" 
  number={3}
  />,
  document.getElementById('root')
);