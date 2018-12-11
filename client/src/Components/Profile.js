import React, { Component } from 'react'

export default class Profile extends Component {

  render() {
    return (
      <div>
        hola este es tu perfil
        {this.props.username}
      </div>
    )
  }
}
