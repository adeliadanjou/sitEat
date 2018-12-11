import React, { Component } from 'react';
import AuthService from '../auth/auth-service';
import { Link, Redirect } from 'react-router-dom'; 


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', email: '', redirect: false};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username   = this.state.username;
    const password   = this.state.password;
    const email      = this.state.email;
    const restaurant = this.state.restaurant;


  
    this.service.signup(username, password, email, restaurant)
    .then( response => {
        this.setState({
            ...this.state,
            username: "", 
            password: "",
            email: "",
            restaurant: false,
            redirect: true
        });
        this.props.getUser(response)

    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    if(name === "restaurant"){
     
      this.setState({[name]: event.target.checked});

    }
    else{
      this.setState({[name]: value});
    }

  }

  render(){
    if(this.state && this.state.redirect) {
      return <Redirect to="/" />
    }

    return(
      <div>

        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          
          <label>Password:</label>
          <input name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />

          <label>Email:</label>
          <input name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Signup" />

          <input type="checkbox" name="restaurant" value={this.state.restaurant} onChange={ e => this.handleChange(e)}/> 
          <label>Soy un restaurante</label>
        </form>
  
        <p>Already have account? 
            <Link to={"/login"}> Login</Link>
        </p>
  
      </div>
    )
  }
  
}

export default Signup;
