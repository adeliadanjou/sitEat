import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AuthService from '../../auth/AuthService';
import Map from '../Map/Map';
import AllRestaurants from '../AllRestaurants/AllRestaurants';
import { Redirect} from 'react-router-dom';
import './Profile.css';


export default class Profile extends Component {
  constructor(props){
    super(props);

    this.state = { redirect: false, username: '', password: '', email: '', restaurantName: '', address: '', zipCode: '', lat: '', lng: '', user:props.user};
    this.authService = new AuthService();
  }

  componentDidMount = () => {
    this.loggedin()
  }
  

  logout = () => {
    this.authService
      .logout()
      .then(() => {
      // this.setState({ redirect: true});
      this.props.getTheUser(null)})
  };

  loggedin = () => {
    this.authService
      .loggedin()
      .then((user) => {
      console.log("logueado!")
      })
      .catch(() => this.setState({...this.state, redirect: true}))
  };
  
  render() {

    if( this.state.redirect) {
      return <Redirect to="/" />
    }

    if(this.props.user){

    var username = this.props.user.username

    if(this.props.user.restaurant === true){
      var restaurantProfile =(
      <div>
         AQUI VA EL PERFIL QUE SOLO PUEDEN VER LOS RESTAURANTES
         <br/>
         <Link to={`Restaurant/${this.props.user._id}`}><button>My Restaurant</button></Link>
         <Link to={`/editTables`}><button>Edita Tus Mesas</button></Link>
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
      this.props.user ? (<div>
        <h2>Hola  {username} este es tu perfil!!!!</h2>
        <br/>
  
        <Link to={`edit/${this.props.user._id}`}><button>Edit my Profile</button></Link>
       
        <Link to={'/'}><button onClick={this.logout}>Log Out</button></Link>
        
        {restaurantProfile}
        {userProfile}

      </div>): (<p>"Loading..."</p>)
      
    )
  }
}
