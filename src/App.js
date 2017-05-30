import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Display from './task/Display';
import Input from './task/Input';
import Loading from './task/Loading';
import getColor from './task/api';

class App extends Component {
  state = {
    color: '#000000',
    loading: false,
    text: 'Click Me!'
  };

  renderDisplay = () => {
    const { color, loading, text } = this.state;

    return loading
      ? <Loading />
      : (
        <Display
          bgColor={ color }
          onClick={ this.getBoxColor }
          inputText={ text }
        />
      );
  }

  getBoxColor = () => {
    this.setState({ loading: true });
    getColor()
      .then(color => this.setState({ color, loading: false }));
  }

  onChangeText = e => this.setState({ text: e.target.value });

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input onChangeText={this.onChangeText} />
          <h2>Welcome to React</h2>
          { this.renderDisplay() }
        </div>
      </div>
    );
  }
}

export default App;
