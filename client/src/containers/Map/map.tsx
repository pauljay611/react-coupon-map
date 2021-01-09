import React from "react";
import GoogleMapReact from "google-map-react";

declare global {
  interface Window {
    google: any;
  }
}

interface Props {}

const Map: React.FC<Props> = () => {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDH6kO6rEZ3ema7p8TAYdIcbsSfcWvpbj8",
        }}
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={10}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
