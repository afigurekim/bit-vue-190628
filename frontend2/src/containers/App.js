import React, { Component } from 'react';
import '../assets/css/App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from '../components/Hello.jsx';
import MyNavbar from '../components/MyNavbar.jsx';

class App extends Component {
  render(){
    return(
      <div className="App">
        <MyNavbar></MyNavbar>
        <Hello name='홍길동'></Hello>
      </div>
    );
  }
}

export default App;
