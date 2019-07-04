import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from '../../presentational/Hello.js';
import MyNavbar from '../../presentational/MyNavbar.js';

class App extends Component {
  render(){
    return(
      <div className="App">
        <MyNavbar/>
        <Hello name='홍길동'></Hello>
      </div>
    );
  }
}

export default App;
