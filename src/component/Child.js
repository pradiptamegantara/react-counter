import {Component} from 'react';

class Child extends Component{
    render(){
        return(
            <div>
                Name: {this.props.name} Age: {this.props.age}
            </div>
        )
    }
}

export default Child;