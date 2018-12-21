import React, { Component } from "react";
import AuthService from "../../auth/AuthService";

export default class MyRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = { misMesasHere: null, search: "" };
    this.authService = new AuthService();
  }

  componentDidMount() {
    this.authService.misMesas().then(misMesasHere => {
      this.setState({ ...this.state, misMesasHere });
    });
  }

  render() {
    console.log(this.state.misMesasHere);
    return (
      <div>
        
        {this.state.misMesasHere
          ? this.state.misMesasHere.user.map((pedido, index) => {
              console.log(pedido);
              return (
                //esto hay que hacerlo bien, pero solo es pintar!!
                <div key={pedido._id}>
                 <p>{pedido.name}</p>
                 <p>{pedido.mesa}</p>

                  <h3>{pedido.chairs}</h3>
                  <h4>{pedido.pedido}</h4>
                </div>
              );
            })
          : ""}
      </div>
    );
  }
}
