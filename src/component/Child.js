import { Component } from "react";

class Child extends Component{
    constructor(props){
        super(props);
    }

    changeMessage = () => {
        let msg = 'change from child';
        this.props.callback(msg);
    }

    render(){
        return(
            <div>
                <h1>Name : {this.props.name} Age : {this.props.age}</h1>
                <button onClick={this.changeMessage}>Change Message</button>
                <h2>{this.props.message}</h2>
                
            </div>
        )
    }
}

export default Child;