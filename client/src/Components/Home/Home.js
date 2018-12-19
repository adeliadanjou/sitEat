import { Link } from "react-router-dom";
import React, { Component } from 'react'
import AuthService from '../../auth/AuthService';
import './Home.css';
 
class Home extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
   
  }
  render () {
      
    return (
      <div className="divHome">
        <img className="logoImage" src={require("../../sitEatLogo.png")} alt=""/>
        <h1>¿Cansado de esperar al camarero? {this.props.username}</h1>
        <h3>¡Nunca más!</h3>
        <Link to={`/signup/`}><button className="btn2 btnWhite">REGÍSTRATE</button></Link>
        <div className="alreadyUser"><p className="aBitSpace">¿Ya tienes cuenta?</p><Link to="/login">Iniciar sesión</Link></div>
       <img className="appStore" src={require("./playStore.png")} alt=""/>
        <div className="white">chungadas varias</div>


       
      </div>
        
     )
}
}
      
        export default Home;