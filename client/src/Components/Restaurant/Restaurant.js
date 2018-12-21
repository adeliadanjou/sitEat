import React, { Component } from 'react'
import AuthService from '../../auth/AuthService';
import { Redirect } from 'react-router-dom';
import './Restaurant.css';

export default class restaurant extends Component {
  constructor(){
    super()
    this.state = { mesa: '', _id: '', name: '', chairs: '', isAvailable: true, pedido: '', status: 'pending',  redirect: false,};
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
        // let newArray = [...this.state.array];
        // newArray.push(response);
      

        this.setState({
            ...this.state,
            mesa: this.state.mesa, 
            name: this.state.name,
            chairs: this.state.chairs,
            isAvailable: false,
            pedido: this.state.pedido,
            status: this.state.status,
            redirect: true
// como hago un setState y luego quiero hacer un redirect, el setState me lo para.
//para hacer un redirect tengo que ponerle la arrow function que ves abajo, un callback.
        }, () => this.props.getUser(response));
        

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
    if(this.props && this.state.redirect){
      return <Redirect to="/misPedidos"  />
    } 

    if(this.props.user){
    if(this.props.user.restaurant === false ){
     
    var userCreate = (
     
      <div className="divRestaurant">
      <div className="formSizeRest">
       <form className="RestaurantForm">
       <h5>HAZ TU PEDIDO:</h5>
        <div className="form-row">
        <div className="form-group col-md-5 bitMargin">
          <label>Mesa:</label>
          <input className="form-control " type="text" name="mesa" value={this.state.mesa} onChange={ e => this.handleChange(e)}/>
          </div>
          <div className="form-group col-md-5 bitMargin marginLeft1">
          <label>Nombre:</label>
          <input className="form-control " type="text" name="name" value={this.state.name}  onChange={ e => this.handleChange(e)} />
          </div>
          <div className="form-group col-md-5 bitMargin">
          <label>Número de personas:</label>
          <input className="form-control" name="chairs" value={this.state.chairs}  onChange={ e => this.handleChange(e)} />
          </div>
          <div className="form-group col-md-5 bitMargin marginLeft1">
          <label>Pedido:</label>
          <input className="form-control " name="pedido" value={this.state.pedido} onChange={ e => this.handleChange(e)} />
          </div>
          
          <input className="btn btn-warning boton" type="submit" value="Enviar pedido" />
          </div>
          </form>
          </div>
      </div>
    )}
  
  }
    return (
    
      <div>
      <form onSubmit={this.handleFormSubmit}>
      {userCreate}
      </form>
        </div>
    )
  }
}
