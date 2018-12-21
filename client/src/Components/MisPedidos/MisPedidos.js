import React, { Component } from 'react'
import AuthService from "../../auth/AuthService";
import { Link } from "react-router-dom";
import './MisPedidos.css';


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
      <div className="searchImg">
        <h1 className="perfilDe per">MIS PEDIDOS:</h1>


{ this.state.misPedidosHere ? this.state.misPedidosHere.restaurant.map((pedido, index) => {
  console.log(pedido)
  return (

    <div className="row">
   <div  className="cardDiv" key={pedido._id}>
    <h1>Mesa: {pedido.mesa}</h1>
    <h6> Nombre: {pedido.name}</h6>
    <h6>{pedido.chairs} Personas</h6>
    <p>{pedido.pedido}</p>
    <div>
    <Link className="linkNone" to={`Restaurant/${pedido.restaurant}`} className="card-link">Nuevo Pedido</Link>
    <Link className="linkNone" to="#" className="card-link">Pedir la cuenta</Link>
    </div>
    </div>
  

</div>

 )}) : (<div>"Estamos cargando tus pedidos"</div>)
} 

      </div>
    )
  }
}
