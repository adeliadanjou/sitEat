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
        <div>
           <section className="divHome">
        <img  src={require("../../images/sitEatLogo.png")} alt=""/>
        <h1 className="separate tiredOfWait">¿Cansado de esperar al camarero? {this.props.username}</h1>
        <h3 >¡Nunca más!</h3>


      <Link to={`/signup/`}>
        <button className="grow btn2 ">REGISTRATE</button>
        </Link>
     
       
        
        
        <div className="alreadyUser">
        <p className="alreadyAccount">¿Ya tienes cuenta?</p>
        <Link className="login" to="/login">Iniciar sesión</Link>
        </div>
       
       
        <div className="sideButons">
           <img className="appStore" src={require("../../images/apple.png")} alt=""/>
           <img className="appStore" src={require("../../images/google.png")} alt=""/>
        </div>
   
          </section>
          <section className="section2">


          </section>
          
        </div>
        
     )
}
}
      
        export default Home;