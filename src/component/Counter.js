import { Component } from "react";
import CounterButtonPlus from "./CounterButtonPlus";
import CounterButtonMinus from "./CounterButtonMinus";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            // count: 0
            // number: 0
            number: props.default,
            product: []
        }
        console.log('Constructor Dipanggil');
        // this.increment = this.increment.bind(this)
    }

    componentWillMount(){
        console.log('componenWillMount dipanggil');
    }

    componentDidMount(){
        this.setState({
            product: ['nasi goreng', 'teh manis', 'kerupuk']
        })
        console.log('componentDidMount Dipanggil');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate Dipanggil');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount dipanggil');
    }
    
   callback = (val) => {
        this.setState({
            number : val
        })
    }

    render(){
        console.log('Render dipanggil');
        return(
            <div>
                <h1 className="text-dark mx-2">{this.state.number}</h1>
                <CounterButtonPlus callback={this.callback} number={this.state.number}/>
                <CounterButtonMinus callback={this.callback} number={this.state.number}/>
                <button onClick={this.props.onNavigate}>Pindah</button>
                {/* <h1 className="text-dark mx-2">{this.state.count}</h1> */}
                {/* <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button> */}
            </div>
        )
    }
}

export default Counter;