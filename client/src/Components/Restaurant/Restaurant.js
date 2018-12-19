import React, { Component } from 'react'
import AuthService from '../../auth/AuthService';
import { Link, Redirect } from 'react-router-dom';

export default class restaurant extends Component {
  constructor(){
    super()
    this.state = { mesa: '', _id: '', name: '', chairs: '', isAvailable: true, pedido: '', status: 'pending'};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const mesa        = this.state.mesa;
    const name        = this.state.name;
    const chairs      = this.state.chairs;
    const isAvailable = this.state.isAvailable;
    const pedido      = this.state.pedido;
    const status      = this.state.status;
    const id = this.props.match.params.restaurantId;

    this.service.createTable(mesa, id, name, chairs, isAvailable, pedido, status)
    .then( response => {
      console.log(response)
        let newArray = [...this.state.array];
        newArray.push(response);
      

        this.setState({
            ...this.state,
            mesa: this.state.mesa, 
            name: this.state.name,
            chairs: this.state.chairs,
            isAvailable: false,
            pedido: this.state.pedido,
            status: this.state.status,

        });
        this.props.getUser(response)

    })
    .catch( error => console.log(error),  )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    if(name === "restaurant"){
     this.setState({[name]: event.target.checked});
    }
    else{
      this.setState({[name]: value});
    }
  }

  render() {
  
    if(this.props.user){
    if(this.props.user.restaurant === false){
      console.log("no eres un restaurante")
    var userCreate = (
     
      <div>

          <label>Mesa:</label>
          <input type="text" name="mesa" value={this.state.mesa} onChange={ e => this.handleChange(e)}/>
          
          <label>Nombre:</label>
          <input type="text" name="name" value={this.state.name}  onChange={ e => this.handleChange(e)} />

          <label>Número de personas:</label>
          <input name="chairs" value={this.state.chairs}  onChange={ e => this.handleChange(e)} />
          
          <label>Pedido:</label>
          <input name="pedido" value={this.state.pedido} onChange={ e => this.handleChange(e)} />

          
          <input type="submit" value="Enviar pedido" />
      
      </div>
    )
    }}
    return (
      // <div>
      //   <h1>AQUI LOS RESTAURANTES PUEDEN VER LAS MESAS Y SUS PEDIDOS:</h1>

      //   <h2>AQUI LOS USUARIOS PUEDEN HACER UN FORMULARIO CON SU PEDIDO Y VER LA CARTA</h2>
      //   <form onSubmit={this.handleFormSubmit}>
      //   {userCreate}
      //   <input type="submit" value="Signup" />
      //   </form>
      // </div>
      <div>
      <form onSubmit={this.handleFormSubmit}>
      {userCreate}
      </form>
        </div>
    )
  }
}
