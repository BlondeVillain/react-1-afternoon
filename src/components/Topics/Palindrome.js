import React, { Component } from 'react';
export default class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      consoleCmd: '',
      palindrome: ''
    };
  }

  isPalindrome(consoleCmd) {
    var fw = consoleCmd;
    var bw = consoleCmd;
    bw = bw.split('');
    bw = bw.reverse();
    bw = bw.join('');

  if ( fw === bw ) {
    this.setState({ palindrome: 'true' });} 
      else {this.setState({ palindrome: 'false' });}
  }

  handleChange(val) {
    this.setState({ consoleCmd: val });
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
      <h4> Palindrome </h4>
      <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
      <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.consoleCmd) }> Check </button>
      <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
}