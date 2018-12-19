import React, { Component } from 'react';
import AuthService from '../../auth/AuthService';
import { Redirect, Link } from 'react-router-dom';


class Edit extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
    this.state = {...props, redirect: false}
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const username = this.state.user.username;
    const email = this.state.user.email;
    const restaurant = this.state.user.restaurant;
    const restaurantName = this.state.user.restaurantName;
    const address = this.state.user.address;
    const zipCode = this.state.user.zipCode;
    const lat = this.state.user.lat;
    const lng = this.state.user.lng;

    this.authService.edit(username, email, restaurant, restaurantName, address, zipCode, lat, lng)
      .then(response => {
        this.setState({
          ...this.state
        });
      })
      .catch(error => console.log(error))
  }

  handleChange(event){
    const { name, value } = event.target;

    if (name === "restaurant") {
      this.setState({ ...this.state, [name]: event.target.checked });
    }
    else {
      this.setState({...this.state, user : {
        ...this.state.user,
        [name]: value
      }}, () => {
        console.log(this.state)
      });
    }
  }

  render() {
    if (this.state === null)  return null;

    if (this.state && this.state.redirect) {
      return <Redirect to="/profile" />
    }

    if (this.state.user && this.state.user.restaurant) {
      var justForRestaurants = (
        <div>
          <label>Restaurant Name:</label>
          <input name="restaurantName" value={this.state.user.restaurantName} onChange={e => this.handleChange(e)} />

          <label>Address:</label>
          <input name="address" value={this.state.user.address} onChange={e => this.handleChange(e)} />

          <label>Zip Code:</label>
          <input name="zipCode" value={this.state.user.zipCode} pattern="[0-9]*" maxLength="5" onChange={e => this.handleChange(e)} />

        </div>
      )
    }

    return (
      <div>

        <form onSubmit={e => this.handleFormSubmit(e)}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.user.username} onChange={e => this.handleChange(e)} />

          <label>Email:</label>
          <input name="email" value={this.state.user.email} onChange={e => this.handleChange(e)} />

          {justForRestaurants}

          <input type="submit" value="Edit" />
          <Link to="/profile">Profile</Link>
        </form>
      </div>
    )
  }

}

export default Edit;

