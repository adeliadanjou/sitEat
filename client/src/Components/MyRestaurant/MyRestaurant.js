import React, { Component } from "react";
import AuthService from "../../auth/AuthService";
import './MyRestaurant.css';

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
      <div className="searchImg">
        
        <h1 className="perfilDe per">MIS MESAS:</h1>
        {this.state.misMesasHere
          ? this.state.misMesasHere.user.map((pedido, index) => {
              console.log(pedido);
              return (
                //esto hay que hacerlo bien, pero solo es pintar!!
                <div className="row">
                <div  className="cardDiv" key={pedido._id}>
                 <h1>Mesa: {pedido.mesa}</h1>
                 <h6> Nombre: {pedido.name}</h6>
                 <h6>{pedido.chairs} Personas</h6>
                 <p>{pedido.pedido}</p>
       
                 </div>
               
             
             </div>
              );
            })
          : ""}
      </div>
    );
  }
}
