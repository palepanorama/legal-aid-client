import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return(
      <Router>
        <Nav />
          <div className="App">
            <h1>Testing</h1>
          </div>
        </Router>
    );
  }
}

export default App;
