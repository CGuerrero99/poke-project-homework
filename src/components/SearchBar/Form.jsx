import React, { Component } from 'react'

export default class Form extends Component {

    constructor(){
        super();

        this.state = {
            name: '',
            img: '#',
            type: ''


        }

    }


    handleName = event => {
        this.setState({
            name: (event.target.value).toLowerCase()
        })
    }

    fetchApi = async () => {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
        let data = await response.json();

        console.log(data);
        this.setState({
            img: data.sprites.front_default,
            type: data.types[0].type.name
        })
    }

    //componentDidMount(){
     //   this.fetchApi();
    //}

    handleSubmit  = event => {
        let name = this.state.name;
        console.log(name);

        this.fetchApi();

        event.preventDefault();
    }

  render() {
    //console.log(this.state.name);

    if(this.state.img === "#"){
       
    return (
      <div>
        <div className='card mt-2'>
            <div className='card-header text-black'>
                Header
            </div>
            <div className='card-body'>
                <form onSubmit={this.handleSubmit}>
                    <label className='text-black'>Ingrese un nombre</label>
                    <br />
                    <input 
                        type="text"
                        placeholder='nombre'
                        className='form-control'
                        onChange={this.handleName}
                        />
                    <br /><br />
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>



            </div>

        </div>
       
        
        </div>
    )} else {
        return(


<div className='card mt-2'>
            <div className='card-header text-black'>
                Header
            </div>
            <div className='card-body'>
                <form onSubmit={this.handleSubmit}>
                    <label className='text-black'>Ingrese un nombre</label>
                    <br />
                    <input 
                        type="text"
                        placeholder='nombre'
                        className='form-control'
                        onChange={this.handleName}
                        />
                    <br /><br />
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>



            </div>





            <div className='row justify-content-center'>
                <div className='card m-1 bg-secondary text-white' style={{width: '18rem'}}>
                    <h1 className='text-center'>{this.state.name}</h1>
                    <img src={this.state.img} alt='pokepoke' />
                 <h1>Type: {this.state.type}</h1>
             </div>
                <button onClick={() => {this.setState({name:'', img: '#', types: ''})}} className="btn btn-primary">Volver</button>

            </div> 
        </div>
        )
    }

}
}
