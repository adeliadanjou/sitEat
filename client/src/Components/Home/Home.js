import { Link } from "react-router-dom";
import React, { Component } from 'react'
import AuthService from '../../auth/AuthService';

 
class Home extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
   
  }
  render () {
      
    return (
      <div>
        <h1>Welcome Home {this.props.username}</h1>
        <Link to={`/login/`}><button>login</button></Link>
        <Link to={`/signup/`}><button>signup</button></Link>
      </div>
        
     )
}
}
      
        export default Home;