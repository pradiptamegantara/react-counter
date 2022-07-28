import { Component } from 'react';

export default class FormListList extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.listItem}</ul>
      </div>
    );
  }
}
