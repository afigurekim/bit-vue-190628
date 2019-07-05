import React, { Component } from 'react';
import '../assets/css/App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Hello from '../components/Hello';
import MyNavbar from '../components/MyNavbar';
// import Login from './Login';
import Join from './Join';

class App extends Component {
  render(){
    return(
      <div className="App">
        <MyNavbar></MyNavbar>
        <Join></Join>
      </div>
    );
  }
}

export default App;
