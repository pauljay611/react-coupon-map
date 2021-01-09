import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import styld from "styled-components";

import { IStore } from "../types";

interface Props {
  stores: IStore[];
  currentPosition: { lat: number; lng: number };
}

interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
}

interface CenterProps {
  lat: number;
  lng: number;
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

const CenterWrapper = styld.div`
  width: 200px;
  height: 200px;
  opacity: 0.3;
  border-radius: 50%;
  background-color: red;
  transform: translate(-50%, -50%);
`;

const defaultCenter = { lat: 40.756795, lng: -73.954298 };

const defaultZoom = 8;

const Marker: React.FC<MarkerProps> = ({ text }) => {
  return <MarkerWrapper>{text}</MarkerWrapper>;
};

const Center: React.FC<CenterProps> = () => {
  return <CenterWrapper />;
};

const Map: React.FC<Props> = ({ stores, currentPosition }) => {
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAP_KEY ?? "",
        }}
        defaultCenter={currentPosition ?? defaultCenter}
        defaultZoom={defaultZoom}
        center={currentPosition}
      >
        <Center {...currentPosition} />
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
