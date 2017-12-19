import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Users from './components/Users';
import Detail from './components/Detail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/all" component={Users} />
            <Route path="/details/:index" component={Detail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
