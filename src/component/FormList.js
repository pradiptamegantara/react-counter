import { Component } from 'react';
import FormListButton from './FormListButton';
import FormListInput from './FormListInput';
import FormListList from './FormListList';

export default class FormList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: [],
    };
  }

  handleChange(key, value) {
    this.setState({
      [key]: value,
    });
  }

  handleSubmit = () => {
    const newItem2 = {
      id: 1 + Math.random(),
      value: this.state.newItem,
    };
    this.setState({
      list: [...this.state.list, newItem2],
      newItem: '',
    });
  };

  render() {
    let listItem = this.state.list.map((newItem) => {
      return <li key={newItem.id}>{newItem.value}</li>;
    });
    return (
      <div>
        <FormListInput
          newItem={this.state.newItem}
          handleChange={(e) => this.handleChange('newItem', e.target.value)}
        />
        <FormListButton handleSubmit={this.handleSubmit} />
        <FormListList listItem={listItem} />
      </div>
    );
  }
}
