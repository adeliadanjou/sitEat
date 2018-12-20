import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true
    });
    this.service = service;
  }

  createTable = (mesa, _id, name, chairs, isAvailable, pedido, status, array ) => {
    return this.service.post(`/restaurant/${_id}`, {mesa, _id,name, chairs, isAvailable, pedido, status, array })
    .then(response => response.data)
  }
  
  signup = (username, password, email, restaurant, restaurantName, address, zipCode,lat,lng, photo) => {
    const formData = new FormData();
    let user = { username, password, email, restaurant, restaurantName, address, zipCode,lat,lng, photo};
    console.log(user)
    Object.keys(user).forEach(key => formData.append(key, user[key]));

    return this.service.post('/signup', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then((response) => {
        console.log('ok!!');
      })
      .catch((err) => {
        console.log('oh oh! Ha entrado por el catch!');
      })
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

  delete = () => {
    return this.service.get('/delete')
    .then(response => response.data)
  }

// me hago el servicio de todos los restaurantes con su ruta modo react para llamarla luego en componente
  allRestaurants = () => {
    return this.service.get('/allRestaurants')
    .then(response => response.data)
  }

  misPedidos = () => {
    return this.service.get('/mispedidos')
    .then(response => response.data)
  }

  misMesas = () => {
    return this.service.get('/myRestaurant')
    .then(response => response.data)
  }

}

export default AuthService;