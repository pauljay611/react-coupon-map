import React from "react";
import GoogleMapReact from "google-map-react";

interface Props {}

const Map: React.FC<Props> = () => {
  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAP_KEY ?? "",
        }}
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={10}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
