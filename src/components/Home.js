import React, { Component } from 'react';
import '../App.css';
import First from './First'

class Home extends Component {

  constructor(props){
    super(props);
    this.goSecond = this.goSecond.bind(this);
    this.goThird = this.goThird.bind(this);
  }

  goSecond(){
    this.props.history.push('/second');
  }

  goThird(){
    this.props.history.push('/third');
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          Connected React Router
        </header>
        <button onClick={this.goSecond}>Go To Second</button>
        <button onClick={this.goThird} >Go To Third</button>
        <div  className="app-body">
          <First />
        </div>
      </div>
    );
  }
}

export default Home;
