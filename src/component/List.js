import { Component } from "react";

class List extends Component{
    constructor(props){
        super(props)
        this.state={
            // products : ['Sabun', 'Shampo', 'Sikat gigi']
            products : [{id:1, brand:'Sabun'}, {id:2, brand:'Shampo'}, {id:3, brand:'Sikat Gigi'}]
        }
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.products.map(p => <li>Key = {p.id} Brand = {p.brand}</li>)}
                </ul>
            </div>
        )
    }
}

export default List;