import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Hello(props) {
  console.log(props);
  return <div>
    
    <h1>Welcome to my {props.library}</h1>
  <p>{props.message}</p>
  </div>;
}


ReactDOM.render(
  <Hello library="Profile" message="This is my profile" />,
  document.getElementById('root')
);