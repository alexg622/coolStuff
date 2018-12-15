import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import ShowProblem from './ShowProblem'
import ShowPoints from './ShowPoints'
import {Listen} from './utils'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: "2",
      solution: "?",
      points: 0
    }
  }

  componentDidMount() {
    Listen(this.handleSubmit.bind(this))
  }

  updateCounter(){
    this.setState({counter: this.state.counter + 1})
  }

  handleSubmit(solutionDiv) {
    let solution = solutionDiv.textContent
    console.log(typeof (parseInt(this.state.number)*2), typeof (solution*2));
    console.log((parseInt(this.state.number)*2), (solution));
    if (parseInt(this.state.number)*2 === parseInt(solution)) {
      solutionDiv.textContent = "?"
      this.setState({number: (this.state.number*2), points: (this.state.points + 1)})
    } else {
      solutionDiv.textContent = "?"
      this.setState({number: "2", points: 0})
    }
  }

  render() {
    return (
      <div className="App text-center">
        <Navbar className="text-center">
          <div className="title" href="#home">MathPlay</div>
        </Navbar>
        < ShowPoints points={this.state.points}/>
        <div className="math-container">
          < ShowProblem solution={this.state.solution} number={this.state.number}/>
        </div>
      </div>
    );
  }
}

export default App;
