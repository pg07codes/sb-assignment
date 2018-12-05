import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import AddStudentForm from "./components/AddStudentForm";


class App extends Component {
  state={
      isAdmin:true
  }

  render() {
    return (
      <Router>
          <div>
              <NavBar isAdmin={this.state.isAdmin}/>
              <div className="container">
                  {this.state.isAdmin?
                      <Route exact path='/addStudent' component={AddStudentForm}/>:
                      <Route exact path='/login' component={LoginForm}/>}
                  <Route exact path='/' component={Home}/>
              </div>
          </div>
      </Router>
    )
  }
}

export default App;
