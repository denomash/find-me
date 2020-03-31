import React, { useState } from "react";
import GoogleMapReact from "google-map-react";


const Map = () => {
  const [defaultProps, setDefaultProps] = useState({
    center: {
      lat: 9.077751,
      lng: 8.6774567
    },
    zoom: 8
  });

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>

    </div>
  );
};

export default Map;
