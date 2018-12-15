import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import ShowProblem from './ShowProblem'
import {Listen} from './utils'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 2,
      solution: "?"
    }
  }

  componentDidMount() {
    Listen(this.setState.bind(this), this.state.solution)
  }

  updateCounter(){
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    return (
      <div className="App text-center">
        <Navbar className="text-center">
          <div className="title" href="#home">MathPlay</div>
        </Navbar>
        <div className="math-container">
          < ShowProblem solution={this.state.solution} number={this.state.number}/>
        </div>
      </div>
    );
  }
}

export default App;
