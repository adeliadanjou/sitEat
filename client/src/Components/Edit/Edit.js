import React, { Component } from 'react';
import AuthService from '../../auth/AuthService';
import { Redirect } from 'react-router-dom'; 


class Edit extends Component {
  constructor(){
    super();
    this.state = { username: '', email: '', restaurantName: '', address: '', zipCode: '', lat: '', lng: '', redirect: false};
    this.service = new AuthService();
    this.service.loggedin()
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    
    const username         = this.state.username;
    const email            = this.state.email;
    const restaurant       = this.state.restaurant;
    const restaurantName   = this.state.restaurantName;
    const address          = this.state.address;
    const zipCode          = this.state.zipCode;
    const lat              = this.state.lat;
    const lng              = this.state.lng;


    this.service.edit(username, email, restaurant, restaurantName, address, zipCode, lat, lng)
    .then( response => {
        this.setState({
            ...this.state,
            username: "", 
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
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    if(name === "restaurant"){
     this.setState({[name]: event.target.checked});
    }
    else{
      this.setState({[name]:value});
    }

  }

  render(){
    console.log(this.props.user)
    if(this.state && this.state.redirect) {
      return <Redirect to="/profile" />  
    }
    if(this.props.user){
    if(this.props.user.restaurant === true){
         var justForRestaurants =(
         <div>
          <label>Restaurant Name:</label>
          <input name="restaurantName" value={this.state.restaurantName} onChange={ e => this.handleChange(e)} />

          <label>Address:</label>
          <input name="address" value={this.state.address} onChange={ e => this.handleChange(e)} />

          <label>Zip Code:</label>
          <input name="zipCode" value={this.state.zipCode} onChange={ e => this.handleChange(e)} />
         
         </div>
         ) 
    }}

    return(
      <div>

        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>

          <label>Email:</label>
          <input name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />
  
        {justForRestaurants}
      
          <input type="submit" value="Edit" />
        </form>
  
      
  
      </div>
    )
  }
  
}

export default Edit;

