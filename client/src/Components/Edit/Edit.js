import React, { Component } from 'react';
import AuthService from '../../auth/AuthService';
import { Redirect } from 'react-router-dom'; 
import "./Edit.css";

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
         <div className="form-row">

          <div className="form-group col-md-6">
          <label>Restaurant Name:</label>
          <input placeholder="La Cocinona" className="form-control" name="restaurantName" value={this.state.restaurantName} onChange={ e => this.handleChange(e)} />
          </div>


          <div className="form-group col-md-8">
          <label>Address:</label>
          <input placeholder="Calle atocha 20, madrid" className="form-control" name="address" value={this.state.address} onChange={ e => this.handleChange(e)} />
          </div>


          <div className="form-group col-md-3 marginLeft">
          <label>Zip Code:</label>
          <input  placeholder="25600" className="form-control" name="zipCode" value={this.state.zipCode} onChange={ e => this.handleChange(e)} />
          </div>

         </div>
         ) 
    }}

    return(
      <div className="divEditId">
      <div className="formSizeEditId">

        <form className="editIdForm" onSubmit={this.handleFormSubmit}>
        <h5>EDIT PROFILE:</h5>

        <div className="form-row">
          <div className="form-group col-md-5 bitMargin">
          <label>Username:</label>
          <input placeholder="25600" className="form-control margin" type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </div>

          <div className="form-group col-md-6 bitMargin">
          <label>Email:</label>
          <input placeholder="Miau@gmail.com" className="form-control margin" name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />
          </div>

        {justForRestaurants}
        <div className="form-group col-md-7 bitMargin">
          <input className="btn btn-warning boton11 " type="submit" value="Edit" />
          </div>
        </div>
        </form>
  
        </div>
      </div>
    )
  }
  
}

export default Edit;

