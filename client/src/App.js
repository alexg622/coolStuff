import React, { Component } from 'react';
import {Button, Navbar, Nav, NavItem} from 'react-bootstrap'
import ShowProblem from './ShowProblem'
import {Listen} from './utils'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 2
    }
  }

  componentDidMount() {
    Listen()
  }

  updateCounter(){
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    return (
      <div className="App text-center">
        <Navbar bpStyle="text-center" className="text-center">
          <div className="title" bpStyle="text-center" href="#home">MathPlay</div>
        </Navbar>
        <div className="math-container">
          < ShowProblem number={this.state.number}/>
        </div>
      </div>
    );
  }
}

export default App;
