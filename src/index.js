<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';


const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
=======
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
<BrowserRouter>
<Root />
</BrowserRouter>, document.getElementById('app'));




// const App = () => {
//   return <Root />
// };

// ReactDOM.render(
// <BrowserRouter>
//   <App />
// </BrowserRouter>, document.getElementById('app'));
>>>>>>> 2417fae9fe2671122163a051e3bae8b8b24cc67f
