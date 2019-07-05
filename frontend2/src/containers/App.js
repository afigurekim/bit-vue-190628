import React, { Component } from 'react';
import '../assets/css/App.css';
import MyNavbar from '../components/MyNavbar';

class App extends Component {
  render(){
    return(
      <div className="App">
        <MyNavbar></MyNavbar>
      </div>
    );
  }
}

export default App;
