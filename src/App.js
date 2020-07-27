import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Weather from './Weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputState: undefined,
      city: 'Budapest'
    }
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <input onChange={(event) => {this.setState({inputState: event.target.value})}} placeholder="Enter your city name"/>
          <button onClick={() => {this.setState({city: this.state.inputState})}}>Get</button>
        </nav>

        <Router>
          <Switch>
            <Redirect exact from="/" to="/getweather" />

            <Route exact path="/getweather">
              <Weather key={this.state.city} city={this.state.city}/>
            </Route>

          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
