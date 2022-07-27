import { Component } from 'react';

export default class CounterButtonPlus extends Component {
  buttonPlus = () => {
    let numb = this.props.number + 1;
    this.props.callback(numb);
  };

  render() {
    return (
      <div>
        <button onClick={this.buttonPlus}>increment</button>
      </div>
    );
  }
}