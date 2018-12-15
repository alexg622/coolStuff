import React, { Component } from 'react';


const ShowProblem = ({number, solution}) => {
  return (
    <div className="big-container">
      <div className="inner-container">
        <div className="numbers">{number}</div>
        <div className="numbers">+</div>
        <div className="numbers">{number}</div>
        <div className="numbers">=</div>
      </div>
      <div className="solution">{solution}</div>
    </div>
  )
}

export default ShowProblem
