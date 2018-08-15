import React, { Component } from 'react';
export default class EvenAndOdd extends Component {

  constructor() {
    super();
    this.state = {
      evenArr: [],
      oddArr: [],
      consoleCmd: ''}
  }
  handleChange(val) {
  this.setState({consoleCmd: val});
  }
  assignEvenAndOdds(consoleCmd) {
  var arr=consoleCmd.split('');
  var even=[];
  var odd=[];

  for (let i=0;i<arr.length;i++){
    if (arr[i]%2==0){even.push(parseInt(arr[i],10));} 
  else{odd.push(parseInt(arr[i],10));}}
  this.setState({evenArr: even,oddArr: odd});
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
      <h4> Evens and Odds </h4>
      <input className="consoleIn" onChange={ (e) => this.handleChange(e.target.value) }></input>
      <button className="submit" onClick={ () => { this.assignEvenAndOdds(this.state.consoleCmd) }}> Split </button>
      <span className="result"> Evens: { JSON.stringify(this.state.evenArr) }</span>
      <span className="result"> Odds: { JSON.stringify(this.state.oddArr) } </span>
      </div>
    )
  }
}