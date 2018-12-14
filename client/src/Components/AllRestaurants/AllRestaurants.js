import React, { Component } from 'react'
import AuthService from '../../auth/AuthService';



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
    console.log(this.state.search)

 if(this.state.allRestaurantsHere){
   let filteredRestaurants= this.state.allRestaurantsHere.restaurant.filter((restaurant)=>{
     return restaurant.restaurantName.toLowerCase().includes(this.state.search) 
    //  esto pa que no se muestren todos, solo lo que buscas --> && this.state.search !== ""
   
   });
   console.log(filteredRestaurants)
   var RestaurantName = (filteredRestaurants.map((restaurant)=>{
     return (restaurant.restaurantName)
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


