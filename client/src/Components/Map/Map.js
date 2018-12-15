// import React, { Component } from "react";
// import { Map, Marker, GoogleApiWrapper } from "google-maps-react";



// class Maps extends Component {
  
//   render() {
//     const style = {
//       width: '100%',
//       height: '100%'
//     }

//     return (
//       <div className="mapFather">
       
//         <Map google={this.props.google} 
//          style={style}
//         Center={{
//           lat: this.props.lat,
//           lng: - this.props.lng,
//         }}
//         zoom={15}
//         onClick={this.mapClicked}>

    
//         <Marker onClick={this.onMarkerClick} name={"Current location"} />
        
//         </Map>
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyBp_NABj80aoBJsjKpHT6q7I1c9lLYB3gk")
// })(Maps)


import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';


class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
  
      width: '50vw',
      height: '75vh',
      
    }
    return (
      <Map
        item
        
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 18 }
        initialCenter = {{ lat: this.props.lat-0.00097, lng: this.props.lng-0.00093 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: this.props.lat-0.00097, lng: this.props.lng-0.00093 }}
          name = { 'Changing Colors Garage' }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          
        
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBp_NABj80aoBJsjKpHT6q7I1c9lLYB3gk")
})(GoogleMapsContainer)