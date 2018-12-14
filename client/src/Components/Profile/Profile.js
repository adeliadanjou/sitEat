import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AuthService from '../../auth/AuthService';
import Map from '../Map/Map';
import AllRestaurants from '../AllRestaurants/AllRestaurants';


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
         <Link to={`/myRestaurant/`}><button>My Restaurant</button></Link>
         {<Map lat={this.props.user.lat} lng={this.props.user.lng}/>}
      </div>
      ) 
    }
    else {
      var userProfile =(
        <div>
           AQUI VA EL PERFIL QUE SOLO PUEDEN VER LOS USUARIOS
           <AllRestaurants/>
        </div>
        ) 
      }
      
    } 
    
    return (
      
      <div>
        hola  {this.props.username} este es tu perfil
        <Link to={`/edit/`}><button>Edit my Profile</button></Link>
       
        <Link to={'/'}><button onClick={this.authService.logout}>Log Out</button></Link>
        
        {restaurantProfile}
        {userProfile}

      </div>
    )
  }
}
