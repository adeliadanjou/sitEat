import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AuthService from '../../auth/AuthService';
import Map from '../Map/Map';
import { Redirect} from 'react-router-dom';
import './Profile.css';


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
         {<Map lat={this.props.user.lat} lng={this.props.user.lng}/>}
      </div>
      ) 
    }
  
      
    } 
    
    return (
      this.props.user ? (
        
        <div className="sectionsProfile">
        <div className="myProfile">
      <div className="perfilH">
      <h1 className="perfilDe per">PERFIL: </h1>
      <h4 className="perfilDe">¡Bienvenido de nuevo {username}!</h4>
      </div>
        
        <br/><br/>
      <div className="linksProfile">
      <Link  to={`edit/${this.props.user._id}`}><button className="margin btSize btn btn-light"
         >Edit my Profile</button></Link>
       
        <Link  to={'/'}><button className="btn btn-danger btSize" onClick={this.delete}>Delete my Account</button></Link>
      </div>
      </div>
        <section className="mapa">
        {restaurantProfile}

        </section>
        </div>): (<p>"Loading..."</p>)
      
    )
  }
}
