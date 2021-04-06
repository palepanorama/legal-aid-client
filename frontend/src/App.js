import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getAttorneys } from './actions';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import List from './components/List';
import Form from './components/Form'
import ErrorPage from './components/Error';

class App extends Component {

  componentDidMount() {
    this.props.getAttorneys();
  }

  render() {
    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }

    return( 
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component= { Home } />
          <Route exact path="/about" component= { About } />
          <Route exact path="/attorneys" component= { List } />
          <Route exact path="/attorneys/new" component= { Form } />
          <Route component= { ErrorPage } />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getAttorneys })(App);