import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './components/NavBar'
class App extends Component {
  state={
  }

  render() {
    return (
      <Router>
          <div>
              <NavBar/>
              <div className="container">
                  <h1>working</h1>
              </div>
          </div>
      </Router>
    )
  }
}

export default App;
