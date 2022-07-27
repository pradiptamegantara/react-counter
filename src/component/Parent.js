import {Component} from 'react';
import Child from './Child';

class Parent extends Component {
    render(){
        return(
            <div>
                <Child name={this.props.name} age={this.props.age}/>
            </div>
        )
    }
}
export default Parent;