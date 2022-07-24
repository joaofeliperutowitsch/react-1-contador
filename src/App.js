import React, { Component } from "react";

export default class App extends Component {
  state = {
    numero: 0
  };

  add = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  remove = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <div>
          <button onClick={this.remove}>-</button>
          <h2>{this.state.numero}</h2>
          <button onClick={this.add}>+</button>
        </div>
      </div>
    );
  }
}
