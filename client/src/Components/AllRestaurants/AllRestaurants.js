import React, { Component } from 'react'
import AuthService from '../../auth/AuthService';
import { Link } from 'react-router-dom'; 


export default class AllRestaurants extends Component {
  constructor(props){
    super(props)
    this.state = { allRestaurantsHere: null, search: '' };
    this.authService = new AuthService();
  }

  componentDidMount() {
        this.authService
    .allRestaurants()
    .then(allRestaurantsHere => this.setState({ ...this.state, allRestaurantsHere })
    )
  }

  updateSearch(event){
    this.setState({search: event.target.value.substr(0,15)})
  }


  render(){
    

 if(this.state.allRestaurantsHere && this.state.allRestaurantsHere.restaurant){
   let filteredRestaurants= this.state.allRestaurantsHere.restaurant.filter((restaurant)=>{
     return restaurant.restaurantName.toLowerCase().includes(this.state.search) 
    //  esto pa que no se muestren todos, solo lo que buscas --> && this.state.search !== ""
   
   });
   
   var RestaurantName = (filteredRestaurants.map((restaurant)=>{
     return <Link to={`Restaurant/${restaurant._id}`}><div><ul><li>{restaurant.restaurantName}</li></ul>
       </div></Link>
   }))
 }

    return (
      <div>
        <h1>LISTA DE RESTAURANTES</h1>
        <input
        id="restaurantSearchBar"
        type="text"
        placeholder="Search"
        onChange={this.updateSearch.bind(this)}
        value={this.state.search}/>
       
      {RestaurantName} 
            
      </div>
      
    )
  }
}


