import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"


const Map = () => {
  return (
    <div>
      <GoogleMap
       defaultOptions={{
        styles: exampleMapStyles,
        }}
          defaultZoom={15}
          defaultCenter={{ lat: 10.762622, lng: 106.660172 }}
        >
          <Marker
              icon={{
                url: 'https://insulationpads.co.uk/wp-content/uploads/2017/10/Home.png',
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              position={{  lat: 10.762622, lng: 106.660172  }}
          />
      </GoogleMap>
    </div>
  );
}

export default withScriptjs(withGoogleMap(Map));
const exampleMapStyles = [
  {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
          {
              color: "#eeeeee",
          },
      ],
  },
  {
      featureType: "poi",
      elementType: "labels.text",
      stylers: [
          {
              visibility: "off",
          },
      ],
  },
  {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
          {
              color: "#9e9e9e",
          },
      ],
  },
];