import React, { Component } from 'react';
export default class FilterString extends Component {
    constructor() {
    super();
    this.state = {
      namesBank: ['Dash', 'Dirk', 'Derrek', 'Dirth', 'Drake'],
      consoleCmd: '',
      filteredNames: []
    };
  }

  filterNames(consoleCmd) {
    var namesBank = this.state.namesBank;
    var filteredNames = [];

    for (var i=0;i<namesBank.length;i++) {
      if (namesBank[i].includes(consoleCmd) ) {
      filteredNames.push(namesBank[i]);}
    }
    this.setState({ filteredNames: filteredNames });}
  
  handleChange(val) {this.setState({ consoleCmd: val });}

  render() {
    return (
      <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText"> Names: { JSON.stringify(this.state.namesBank, null, 10) } </span>
      <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
      <button className="confirmationButton" onClick={ () => this.filterNames(this.state.consoleCmd) }> Filter </button>
      <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
      </div>
    )
  }
}