import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import styld from "styled-components";

import { IStore } from "../types";

interface Props {
  stores: IStore[];
}

interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
}

const Wrapper = styld.div`
    width: 100%;
    height: 100%;
`;

const MarkerWrapper = styld.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background-color: red;
`;

const defaultCenter = { lat: 40.756795, lng: -73.954298 };

const defaultZoom = 12;

const Marker: React.FC<MarkerProps> = ({ text }) => {
  return <MarkerWrapper>{text}</MarkerWrapper>;
};

const Map: React.FC<Props> = ({ stores }) => {
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  }>();

  navigator.geolocation.getCurrentPosition(({ coords }) => {
    setCurrentPosition({ lat: coords.latitude, lng: coords.longitude });
  });

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAP_KEY ?? "",
        }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
        center={currentPosition}
      >
        {stores.map((store) => (
          <Marker
            key={store.ID}
            lat={store.lat}
            lng={store.lng}
            text={store.name}
          />
        ))}
      </GoogleMapReact>
    </Wrapper>
  );
};

export default Map;
