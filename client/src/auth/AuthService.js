import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api/auth',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password, email, restaurant, restaurantName, address, zipCode) => {
    return this.service.post('/signup', {username, password, email, restaurant, restaurantName, address, zipCode })
    .then(response => response.data)
  }

  edit = (username, email, restaurant, restaurantName, address, zipCode) => {
    return this.service.post('/edit', {username, email, restaurant, restaurantName, address, zipCode })
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }
  
  logout = () => {
    return this.service.get('/logout')
    .then(response => response.data)
  }
// me hago el servicio de todos los restaurantes con su ruta modo react para llamarla luego en componente
  allRestaurants = () => {
    return this.service.get('/allRestaurants', {})
    .then(response => response.data)
  }

}

export default AuthService;