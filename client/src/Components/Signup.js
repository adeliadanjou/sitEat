import React, { Component } from 'react';
import AuthService from '../auth/auth-service';
import { Link, Redirect } from 'react-router-dom'; 


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', campus: '', course: '', redirect: false};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const campus = this.state.campus;
    const course = this.state.course;

  
    this.service.signup(username, password, campus, course)
    .then( response => {
        this.setState({
            ...this.state,
            username: "", 
            password: "",
            campus: "",
            course: "",
            redirect: true
        });
        this.props.getUser(response)

        // this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
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
          <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />

          <label>Campus:</label>
          <textarea name="campus" value={this.state.campus} onChange={ e => this.handleChange(e)} />

          <label>Course:</label>
          <textarea name="course" value={this.state.course} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Signup" />
        </form>
  
        <p>Already have account? 
            <Link to={"/login"}> Login</Link>
        </p>
  
      </div>
    )
  }
  
  
  
}

export default Signup;
