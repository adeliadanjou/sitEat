import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


export default class Layout extends Component {
  
  render() {
    console.log(this.props.user)
    if(!this.props.user){
      var notUser = (<div className="ml-auto w-100 justify-content-end"><div className="collapse navbar-collapse" id="navbarSupportedContent">
   
      <ul className="nav navbar-nav ml-auto w-100 justify-content-end ">
        <li className="nav-item">
          <Link className="nav-link btns btnOrange" to="/signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btns btnWhite" to="/login">Login</Link>
        </li>
       
      </ul>
    
    </div></div>)
    }
    return (
      <div>
     <nav className="navbar navbar-expand-lg bg-warning">
  <Link to="/"><img className="logo" alt=""/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
  aria-expanded="false" aria-label="Toggle navigation">
   
  </button>
     {notUser}
  
</nav>
  
      </div>
    )
  }
}

      