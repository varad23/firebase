import React, { Component } from 'react';

import './App.css';
import Design from './component/Design'
import Message from './component/Message'

class App extends Component{

  render(){
    return(
      <div className="main">
      <Design />
      <h1 className="footer">Contact Us </h1>
      <Message />
     
      </div>
    )
  }
}

export default App;
