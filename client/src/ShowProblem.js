import React, { Component } from 'react';


const ShowProblem = ({number}) => {
  return (
    <div className="show-number-container">
      <div className="problem">{number}</div>
      <div className="problem">+</div>
      <div className="problem">{number}</div>
      <div className="problem">=</div>
      <div className="solution">?</div>
   </div>
  )
}

export default ShowProblem
