import React from "react";
import GoogleMapReact from "google-map-react";
import styld from "styled-components";

interface Props {}

const Wrapper = styld.div`
    width: 100%;
    height: 100%;
`;

const Map: React.FC<Props> = () => {
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAP_KEY ?? "",
        }}
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={10}
      ></GoogleMapReact>
    </Wrapper>
  );
};

export default Map;
