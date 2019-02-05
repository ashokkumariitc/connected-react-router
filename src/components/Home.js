import React, { Component } from 'react';
import '../App.css';
import First from './First'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Connected React Router
        </header>
        <div  className="app-body">
          <First />
        </div>
      </div>
    );
  }
}

export default Home;
