import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/State'
import { BrowserRouter, Route } from 'react-router-dom';
import { addPost } from './redux/State'
import { newMassageFun } from './redux/State'



ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>

      <App
        state={state}
        addPost={addPost}
        newMassageFun={newMassageFun} />

    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
