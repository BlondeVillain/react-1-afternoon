import React, { Component } from 'react';
import EvenAndOdd from "../../components/Topics/EvenAndOdd.js"
import FilterObject from "../../components/Topics/EvenAndOdd.js"
import FilterString from "../../components/Topics/FilterObject.js"
import Palindrome from "../../components/Topics/Palindrome.js"
import Sum from "../../components/Topics/Sum.js"


export default class TopicBrowser extends Component {
    render() {
      return (
        <div>
        <EvenAndOdd /><br/>
        <FilterObject /><br/>
        <FilterString /><br/>
        <Palindrome /><br/>
        <Sum />
        </div>
      )
    }
  }
