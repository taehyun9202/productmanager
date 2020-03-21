import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail'


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/products/"/>
        <Detail path="/products/:id"/>
      </Router>
      
    </div>
  );
}

export default App;
