import React from 'react';
import { render } from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Root from './components/Root';
import { HashRouter as Router } from 'react-router-dom'


render(
    <Router>
      <Root />
    </Router>,
  document.getElementById('app')
);



// const App = () => {
//   return <Root />;
// };

// ReactDOM.render(<App />, document.getElementById('app'));
