import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Profile from "./Components/Profile/Profile";
import AuthService from "./auth/AuthService";
import Edit from "./Components/Edit/Edit";
import Layout from "./Layout";
import Restaurant from "./Components/Restaurant/Restaurant";
import AllRestaurants from "./Components/AllRestaurants/AllRestaurants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };

    this.authService = new AuthService();
    this.authService
      .loggedin()
      .then(loggedInUser => this.setState({ ...this.state, loggedInUser }));
  }

  getTheUser = userObj => {
    this.setState({
      ...this.state,
      loggedInUser: userObj
    });
  };
  // user={this.state.loggedInUser} --> esto es para pasar a las rutas el usuario ya cargado ok? con el props

  render() {
    
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Layout user={this.state.loggedInUser} getTheUser={this.getTheUser} />

          <Switch>
            <Route exact path="/" component={Home} getUser={this.getTheUser} />
            <Route
              exact path="/profile"
              render={() => (
                <Profile
                  user={this.state.loggedInUser}
                  getTheUser={this.getTheUser}
                />
              )}
            />
            <Route
              exact
              path="/edit/:restaurantId"
              render={() => (
                <Edit user={this.state.loggedInUser} getUser={this.getTheUser} />
              )}
            />
            <Route
              exact
              path="/restaurant/:restaurantId"
              render={props => (
                <Restaurant
                  {...props}
                  user={this.state.loggedInUser}
                  getUser={this.getTheUser}
                />
              )}
            />
          </Switch>
        </div>
      )
    } else {
      return (
        <div className="App">
          <Layout user={this.state.loggedInUser} getTheUser={this.getTheUser} />

          <Switch>
            <Route exact path="/" component={Home} getUser={this.getTheUser} />

            <Route
              exact path="/login"
              render={() => <Login getUser={this.getTheUser} />}
            />
            <Route
              exact path="/signup"
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <Route
              exact path="/profile"
              render={() => <Profile getUser={this.getTheUser} />}
            />
            <Route
              exact
              component={AllRestaurants}
              path="/searchRestaurant"
              render={() => <AllRestaurants getUser={this.getTheUser} />}
            />
          </Switch>
        </div>
      )

    }
  }
}

export default App;