const { Component } = require('react');

export default class Greet extends Component {
  constructor(props) {
    super(props);
    this.state = {name:'Enigmacamp'}
  }

  change = () => {
    this.setState({name: 'It bootcamp'})
  }

  render(){
    return(
        <div>
            <h2>{this.state.name}</h2>
            <button onClick={this.change}>button</button>
        </div>
    )
  }
}