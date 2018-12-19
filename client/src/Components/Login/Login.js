import React, { Component } from "react";
import AuthService from "../../auth/AuthService";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", redirect: false, mesaggeE: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .login(username, password)
      .then(response => {
        this.setState({ username: "", password: "", redirect: true });
        this.props.getUser(response);
      })
      .catch(error =>
        this.setState({ messageE: "Usuario o Contraseña incorrecto" })
      );
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    if (this.state && this.state.redirect) {
      return <Redirect to="/profile" />;
    }
    return (
      <div className="divLogin">
       <div className="formSize">
        <form className="loginForm" onSubmit={this.handleFormSubmit}>
       <h5>LOGIN:</h5>
          <div className="form-group bitMargin">
            <label>Username:</label>
            <input
              type="text"
              placeholder="Piranna"
              name="username"
              className="form-control"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
          </div>

          <label>Password:</label>
          <input
            name="password"
            type="password"
            placeholder="contraseña"
            className="form-control"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
            <p className="colorErr">{this.state.messageE}</p>

          <input class="btn btn-warning boton" type="submit" value="Login" />
        <p>
          Don't have an account yet?
          <Link to={"/signup"}> Signup</Link>
        </p>
        </form>
        </div>
      </div>
    );
  }
}

export default Login;
