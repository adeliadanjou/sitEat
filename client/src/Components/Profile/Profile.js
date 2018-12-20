import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AuthService from '../../auth/AuthService';
import Map from '../Map/Map';
import { Redirect} from 'react-router-dom';



export default class Profile extends Component {
  constructor(props){
    super(props);

    this.state = { redirect: false, user:props.user};
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

  delete = () => {
    this.authService
      .delete()
      .then(() => {
      
      this.props.getTheUser(null)})
  }

  loggedin = () => {
    this.authService
      .loggedin()
      .then((user) => { 
        this.setState({...this.state, user})
      })
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
         
        
         {<Map lat={this.props.user.lat} lng={this.props.user.lng}/>}
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
      
    } 
    
    return (
      this.state.user ? (<div>
        <h2>Hola  {username} este es tu perfil!!!!</h2>
        <br/>
  
        <Link to={`edit/${this.state.user._id}`}><button>Edit my Profile</button></Link>
       
        <Link to={'/'}><button onClick={this.delete}>Delete my Account</button></Link>
        
        {restaurantProfile}
        {userProfile}

      </div>): (<p>Loading...</p>)
      
    )
  }
}
