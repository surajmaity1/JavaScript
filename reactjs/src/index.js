import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './thinking-in-react/App';
// import MyApp from './components/MyApp';
// import App from "./tic_tac_toe/src/App"; /* Tic Tac Toe */ 
// import "./tic_tac_toe/src/styles.css"; /* Tic Tac Toe */ 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MyApp/> */}  {/* Basic */}
    {/* <App /> */ /* Tic Tac Toe */}
    <App/> {/* thinking-in-react */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
