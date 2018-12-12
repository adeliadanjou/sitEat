import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import '../App.css';

class Maps extends Component {
  
  render() {
    const style = {
      width: '50%',
      height: '50%'
    }
    
    return (
      <div className="mapFather">
       
        <Map google={this.props.google} 
         style={style}
        initialCenter={{
          lat: 40.392532,
          lng: -3.698267
        }}
        zoom={15}
        onClick={this.mapClicked}>

      
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBp_NABj80aoBJsjKpHT6q7I1c9lLYB3gk")
})(Maps)
