import React, { Component } from "react";
import AuthService from "../../auth/AuthService";
import { Link, Redirect } from "react-router-dom";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      restaurantName: "",
      address: "",
      zipCode: "",
      lat: "",
      lng: "",
      messageE:"",
      redirect: false

    };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const restaurant = this.state.restaurant;
    const restaurantName = this.state.restaurantName;
    const address = this.state.address;
    const zipCode = this.state.zipCode;
    const lat = this.state.lat;
    const lng = this.state.lng;

    this.service.signup(
        username,
        password,
        email,
        restaurant,
        restaurantName,
        address,
        zipCode,
        lat,
        lng
      )
      .then(response => {

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
        }, () => this.props.getUser(response));
        
      })
      .catch(error => this.setState({ messageE: "Ups!! Algo ha ido mal!" }));
  };

  handleChange = event => {
    const { name, value } = event.target;
    if (name === "restaurant") {
      this.setState({ [name]: event.target.checked });
    } else {
      this.setState({ [name]: value });
    }
  };

  render(){
    if(this.props && this.state.redirect){
      return <Redirect to="/profile"  />
    }

    if (this.state.restaurant === true) {
      var justForRestaurants = (
        <div className="form-row">
          <div className="form-group col-md-6  ">
            <label>Restaurant Name:</label>
            <input
              name="restaurantName"
              placeholder="La Cocinona"
              className="form-control"
              value={this.state.restaurantName}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group col-md-9  ">
            <label>Address:</label>
            <input
              name="address"
              className="form-control"
              placeholder="Calle toledo 64, Madrid"
              id="pac-input"
              
              value={this.state.address}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group col-md-2 marginLeft ">
            <label>Zip Code:</label>
            <input
              name="zipCode"
              className="form-control"
              value={this.state.zipCode}
              placeholder="28330"
              maxLength="5"
              pattern="[0-9]*"
              onChange={e => this.handleChange(e)}
            />
          </div>

          <div id="map" height="100%" />
        </div>
      );
    }
    return (
      <div className="divSignup">
        <div className="formSizeSignup">
          <form className="signupForm" onSubmit={this.handleFormSubmit}>
            <h5>SIGNUP:</h5>
        <div className="form-row">
            <div className="form-group col-md-5 bitMargin">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group col-md-5 bitMargin marginLeft">
              <label>Password:</label>
              <input
                name="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group col-md-7 ">
              <label>Email:</label>
              <input
                name="email"
                placeholder="piranna@sit&Eat.com"
                className="form-control"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
              />
            </div>
            {justForRestaurants}
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="restaurant"
                value={this.state.restaurant}
                onChange={e => this.handleChange(e)}
              />
              <label>Soy un restaurante</label>
            </div>

            <input className="btn btn-warning boton" type="submit" value="Signup" />
            <p className="colorErr">{this.state.messageE}</p>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
