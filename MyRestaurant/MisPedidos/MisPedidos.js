import React, { Component } from 'react'
import AuthService from "../../auth/AuthService";

export default class MisPedidos extends Component {
  constructor(props) {
    super(props);
    this.state = {  misPedidosHere: null, search: "",   };
    this.authService = new AuthService();
  }

  componentDidMount() {
    this.authService.misPedidos().then(misPedidosHere => {
      this.setState({ ...this.state, misPedidosHere });
    });
  }

  render() {
    console.log(this.state.misPedidosHere)
    return (
      <div>
        TODOS MIS PEDIDOS LOS TENGO AQUI:


{ this.state.misPedidosHere ? this.state.misPedidosHere.restaurant.map((pedido, index) => {
  console.log(pedido)
  return (

    //esto hay que hacerlo bien, pero solo es pintar!!
   <div key={pedido._id}>
     <img style={{width: '10%'}} src={pedido.name} alt=""/>
     
     <h3>{pedido.chairs}</h3>
     <h4>{pedido.pedido}</h4>
   </div>
 )}) : ''
} 
      

      </div>
    )
  }
}
