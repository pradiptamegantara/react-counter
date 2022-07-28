import { Component } from "react";
import Child from './Child';

class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {
            message : 'this is from parent'
        }
    }

    callback = (val) => {
        this.setState({
            message : val
        })
    }

    render(){
        return(
            <div>
                {/* <Child name={this.props.name} age={this.props.age}/> */}
                <Child callback={this.callback} name={this.props.name} age={this.props.age} message={this.state.message}/>
            </div>
        )
    }
}

export default Parent;