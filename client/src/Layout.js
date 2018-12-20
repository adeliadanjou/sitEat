import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import AuthService from "./auth/AuthService";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }
  componentDidMount = () => {
    this.loggedin();
  };

  logout = () => {
    this.authService.logout().then(() => {
      // this.setState({ redirect: true});
      this.props.getTheUser(null);
    });
  };

  loggedin = () => {
    this.authService
      .loggedin()
      .then(user => {
        console.log("logueado!");
      })
      .catch(() => this.setState({ ...this.state, redirect: true }));
  };

  render() {
    if (!this.props.user) {
      var notUser = (
        <div className="ml-auto w-100 justify-content-end">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end ">
              <li className="nav-item">
                <Link className="nav-link btns btnOrange" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btns btnWhite" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      var User = (
        <div className="ml-auto w-100 justify-content-end">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end ">
              <li className="nav-item">
                <Link className="nav-link btns btnOrange" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"}>
                  <button
                    className="nav-link btns btnWhite btnn"
                    onClick={this.logout}
                  >
                    Logout
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      );

      if (this.props.user.restaurant) {
        var myrestaurant = (
          <div className="mr-auto w-25 ">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto w-100 justify-content-end ">
                <li className="nav-item">
                  <Link to={`Restaurant/${this.props.user._id}`}>
                    <button className="btn btn-danger myRestaurantBtn">
                      My Restaurant
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        );
      } else {
        var searchRestaurants = (
          <div className="mr-auto  w-20 ">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto w-100 justify-content-end ">
                <li className="nav-item">
                  <Link to={"/searchRestaurant"}>
                    <button className="btn btn-danger searchRestBtn">
                      Buscador de Restaurantes
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        );
      }
    }

    if (this.props)
      return (
        <div>
          <nav className="navbar navbar-expand-lg bg-warning">
            <Link to={"/"}>
              <img className="logo" alt="" />
            </Link>
            {searchRestaurants}
            {myrestaurant}
            {notUser} {User}
          </nav>
        </div>
      );
  }
}
