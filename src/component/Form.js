import { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: 'Pilih',
            tahun: 0}
    }

    // Merubah State Value
    handleChange = (event) =>{
        this.setState({
            value: event.target.value
        })
        // console.log(event.target.value);
    }

    handleChangeTahun = (event) =>{
        this.setState({
            tahun: event.target.tahun
        })
        
    }

    // Munculin Popup Message
    handleSubmit = (event) =>{
        event.preventDefault(); // Biar nggak loading. Jadi kalau diklik browsernya otomatis reload. dikasih itu nggak reload
        console.log(this.state.value);
        // cara1 handle pilih= pake condition
        const hasil = this.state.value;
        if (hasil === 'Pilih') {
            alert('silahkan pilih dulu')
        } else {
            alert(`name: ${this.state.value} ${this.state.tahun}`)
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        {/* <input type='type' placeholder='user name' onChange={this.handleChange} value={this.state.value}/>
                        <textarea value={this.state.value} onChange={this.handleChange} /> */}
                        <select value={this.state.value} onChange={this.handleChange}>
                        {/* cara2 handle pilih pake disabled sama value string kosong, biar ga bisa dipilih */}
                            <option disabled>Pilih</option> 
                            <option>BMW</option>
                            <option>Honda</option>
                            <option>Ferari</option>
                        </select>
                    </label>
                    <label>
                        Tahun:
                        <input onChange={this.NewChangeTahun} value={this.state.tahun}/>
                    </label>
                    <button type='submit' value='submit'>Add</button>
                </form>
            </div>
        )
    }
}

export default Form;