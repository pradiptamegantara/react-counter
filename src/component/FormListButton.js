import { Component } from 'react';

export default class FormListButton extends Component {
  render() {
    return (
      <div>
        <button type="submit" value="submit" onClick={this.props.handleSubmit}>
          Add
        </button>
      </div>
    );
  }
}
