import React, { Component } from "react";
import AuthService from "../../auth/AuthService";
import { Link } from "react-router-dom";
import './AllRestaurants.css';

export default class AllRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = { allRestaurantsHere: null, search: "" };
    this.authService = new AuthService();
  }

  componentDidMount() {
    this.authService.allRestaurants().then(allRestaurantsHere => {
      this.setState({ ...this.state, allRestaurantsHere });
    });
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 15) });
  }

  render() {
    if (
      this.state.allRestaurantsHere &&
      this.state.allRestaurantsHere.restaurant
    ) {
      let filteredRestaurants = this.state.allRestaurantsHere.restaurant.filter(
        restaurant => {
          return restaurant.restaurantName
            .toLowerCase()
            .includes(this.state.search);
          //  esto pa que no se muestren todos, solo lo que buscas --> && this.state.search !== ""
        }
      );

      var RestaurantName = filteredRestaurants.map(restaurant => {
        return (
          <Link className="restaurantsLinks"to={`Restaurant/${restaurant._id}`}>
            <div>
              <ul>
                <li>{restaurant.restaurantName}</li>
              </ul>
            </div>
          </Link>
        );
      });
    }

    return (
      <div >
        <h4 className="restList">
        <img src={require("./lupa.png")}  width="33px" alt=""/>
        <input
          id="restaurantSearchBar"
          type="text"
          placeholder="Search..."
          onChange={this.updateSearch.bind(this)}
          value={this.state.search}
        /></h4>

        <div className="searchDiv">
        <div className="linksPad">
        {RestaurantName}
        </div>
        
        </div>
      </div>
    );
  }
}
