import React, { Component } from 'react';

export default class FilterObject extends Component {

  constructor() {
    super();
    this.state = {
    serfs: [{name: 'Phanos',title: 'Heir Destroobin', age: 9001},
    {name: 'Bejeeta', age: 40, hairColor: 'Black'},
    {name: 'Jeeve Stobbs', title: 'Derple Borbmender'}],
    consoleCmd: '',
    filteredSerfs: []
    }
  }

  filterSerfs(prop) {
    var serfs = this.state.serfs;
    var filteredSerfs = [];
    for (var i=0;i<serfs.length;i++) {
    if (serfs[i].hasOwnProperty(prop)){filteredSerfs.push(serfs[i]);}}
    this.setState({ filteredSerfs: filteredSerfs });
  }

  handleChange(val) {this.setState({ consoleCmdt: val });}

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
      <h4> Filter Object </h4>
      <span className="puzzleText"> Original: { JSON.stringify(this.state.serfs, null, 10) } </span>
      <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
      <button className="confirmationButton" onClick={ () => this.filterSerfs(this.state.consoleCmd) }> Filter </button>
      <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredSerfs, null, 10) } </span>
      </div>
    )
  }
}