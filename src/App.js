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

  renderLoader = () =>
    this.state.loading
      ? <Loading />
      : null;

  getBoxColor = () => {
    this.setState({ loading: true });
    getColor()
      .then(color => this.setState({ color, loading: false }));
  }

  onChangeText = e => this.setState({ text: e.target.value });

  render() {
    const { color, text } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="task-container">
            <Input onChangeText={this.onChangeText} />
            <Display
              bgColor={ color }
              onClick={ this.getBoxColor }
              inputText={ text }
            />
            { this.renderLoader() }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
