import React, { Component } from 'react';
import AuthService from '../../auth/AuthService';
import { Link, Redirect } from 'react-router-dom'; 
import "./Signup.css";


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', email: '', restaurantName: '', address: '', zipCode: '', lat: '', lng: '', redirect: false};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username         = this.state.username;
    const password         = this.state.password;
    const email            = this.state.email;
    const restaurant       = this.state.restaurant;
    const restaurantName   = this.state.restaurantName;
    const address          = this.state.address;
    const zipCode          = this.state.zipCode;
    const lat              = this.state.lat;
    const lng              = this.state.lng;

    this.service.signup(username, password, email, restaurant, restaurantName, address, zipCode, lat, lng)
    .then( response => {
        this.setState({
            ...this.state,
            username: "", 
            password: "",
            email: "",
            restaurant: false,
            restaurantName: "",
            address: "",
            zipCode: "",
            lat: "",
            lng: "",

            redirect: true
        });
        this.props.getUser(response)

    })
    .catch( error => console.log(error),  )
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
    if(this.state.user){
    if(this.state.user && this.state.redirect) {
      return <Redirect to="/profile" />
    }
    if(this.state.restaurant === true){
     
         var justForRestaurants =(
         <div>
           <div className="form-group bitMargin">
          <label>Restaurant Name:</label>
          <input name="restaurantName" value={this.state.restaurantName} className="form-control" onChange={ e => this.handleChange(e)} />
          </div>
          <div className="form-group bitMargin">
          <label>Address:</label>
          <input name="address" id="pac-input" class="controls" className="form-control" value={this.state.address} onChange={ e => this.handleChange(e)} />
          </div>
          <div className="form-group bitMargin">
          <label>Zip Code:</label>
          <input name="zipCode" value={this.state.zipCode} className="form-control" onChange={ e => this.handleChange(e)} />
          </div>
          <div id="map" height="100%"></div>
          
          

         </div>
         ) 
     
    }}
    return(
      <div className="divSignup">
        <div className="formSize">
        <form className="signupForm" onSubmit={this.handleFormSubmit}>
        <h5>SIGNUP:</h5>
        <div className="form-group bitMargin">
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} className="form-control" onChange={ e => this.handleChange(e)}/>
        </div>
        <div className="form-group bitMargin">
          <label>Password:</label>
          <input name="password" value={this.state.password} className="form-control" onChange={ e => this.handleChange(e)} />
        </div>
        <div className="form-group bitMargin">
          <label>Email:</label>
          <input name="email" value={this.state.email} className="form-control" onChange={ e => this.handleChange(e)} />
        </div>
        <div className="form-check bitMargin">
          <input type="checkbox" name="restaurant" value={this.state.restaurant} className="form-check-input checkBox" onChange={ e => this.handleChange(e)}/> 
          <label>Soy un restaurante</label>
        </div>
        {justForRestaurants}
        
          <input class="btn btn-warning boton" type="submit" value="Signup" />
        <p>Already have account? 
            <Link to={"/login"}> Login</Link>
        </p>
        </form>
        </div>
      </div>
    )
  }
}

export default Signup;
