import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AuthService from '../../auth/AuthService';


export default class Profile extends Component {
  constructor(props){
    super(props);
   
    this.state = { username: '', password: '', email: '', restaurantName: '', address: '', zipCode: '', lat: '', lng: '', user:props.user};
    this.authService = new AuthService();
  }
  
  render() {
    if(this.props.user){

    if(this.props.user.restaurant === true){
      var restaurantProfile =(
      <div>
         AQUI VA EL PERFIL QUE SOLO PUEDEN VER LOS RESTAURANTES
      </div>
      ) 
 }
    else {
      var userProfile =(
        <div>
           AQUI VA EL PERFIL QUE SOLO PUEDEN VER LOS USUARIOS
        </div>
        ) 
    }

    } console.log(this.props.user)



    return (
      <div>
        hola este es tu perfil
        {this.props.username}
        <Link to={'/'}><button onClick={this.authService.logout}>Log Out</button></Link>
        {restaurantProfile}
        {userProfile}
      </div>
    )
  }
}
