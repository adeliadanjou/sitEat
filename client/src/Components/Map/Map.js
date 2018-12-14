import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";



class Maps extends Component {
  
  render() {
    const style = {
      width: '100%',
      height: '100%'
    }

    return (
      <div className="mapFather">
       
        <Map google={this.props.google} 
         style={style}
        Center={{
          lat: this.props.lat,
          lng: this.props.lng,
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


// class MainMap extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       markers: [
//         {
//           title: "The marker`s title will appear as a tooltip.",
//           name: "SOMA",
//           position: { lat: 37.778519, lng: -122.40564 }
//         }
//       ]
//     };
//     this.onClick = this.onClick.bind(this);
//   }

//   onClick(t, map, coord) {
//     const { latLng } = coord;
//     const lat = latLng.lat();
//     const lng = latLng.lng();

//     this.setState(previousState => {
//       return {
//         markers: [
//           ...previousState.markers,
//           {
//             title: "",
//             name: "",
//             position: { lat, lng }
//           }
//         ]
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="text-center">My Maps</h1>
//         <Map
//           google={this.props.google}
//           style={{ width: "80%", margin: "auto" }}
//           className={"map"}
//           zoom={14}
//           onClick={this.onClick}
//         >
//           {this.state.markers.map((marker, index) => (
//             <Marker
//               key={index}
//               title={marker.title}
//               name={marker.name}
//               position={marker.position}
//             />
//           ))}
//         </Map>
//       </div>
//     );
//   }
// }


// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyBp_NABj80aoBJsjKpHT6q7I1c9lLYB3gk")
// })(MainMap)