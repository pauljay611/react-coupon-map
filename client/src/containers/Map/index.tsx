import React, { useEffect, useState } from "react";
import styld from "styled-components";

import Category from "../Category";
import { useStores } from "../../hooks/store";

import GoogleMap from "../../component/GoogleMap";

interface Props {}

const Wrapper = styld.div`
    width: 100%;
    height: 400px;
    position: relative;
    border: 1px solid black;
`;

const range = 2;

const Map: React.FC<Props> = (props: Props) => {
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  }>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCurrentPosition({ lat: coords.latitude, lng: coords.longitude });
    });
  }, []);

  const { stores, loading } = useStores({ range, location: currentPosition });

  function renderStores() {
    if (stores.length === 0 || !currentPosition) return null;
    if (loading) return <span>loading</span>;
    return <GoogleMap stores={stores} currentPosition={currentPosition} />;
  }

  return (
    <Wrapper>
      <Category />
      {renderStores()}
    </Wrapper>
  );
};

export default Map;
