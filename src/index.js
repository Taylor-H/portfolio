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
