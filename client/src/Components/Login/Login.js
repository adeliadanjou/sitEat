import React, { Component } from 'react';
import AuthService from '../../auth/AuthService';
import { Link, Redirect} from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', redirect: false, mesaggeE: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "",  redirect: true});
        this.props.getUser(response)
    })
    .catch( error => this.setState({messageE:"Usuario o Contraseña incorrecto"} ))
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    if(this.state && this.state.redirect) {
      return <Redirect to="/profile" />
    }
    return(
      <div>
        
       <p>{this.state.messageE}</p> 
        
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          <label>Password:</label>
          <textarea name="password" type="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Login" />
        </form>
        <p>Don't have account? 
            <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    )
  }
}

export default Login;