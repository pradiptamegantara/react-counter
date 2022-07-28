import { Component } from 'react';

export default class CounterButtonMin extends Component {
  buttonMin = () => {
    let numb = this.props.number - 1;
    this.props.decrement(numb);
  };

  render() {
    return (
      <div>
        <button onClick={this.buttonMin}>decrement</button>
      </div>
    );
  }
}