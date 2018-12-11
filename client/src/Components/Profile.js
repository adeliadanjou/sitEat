import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AuthService from '../auth/AuthService';


export default class Profile extends Component {
  
  render() {
    this.authService = new AuthService();
    return (
      <div>
        hola este es tu perfil
        {this.props.username}
        <Link to={'/'}><button onClick={this.authService.logout()}>Log Out</button></Link>

      </div>
    )
  }
}
