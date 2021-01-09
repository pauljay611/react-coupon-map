import React from "react";
import styld from "styled-components";

import Category from "../Category";
import { useStores } from "../../hooks/store";

import Map from "./map";

interface Props {}

const Wrapper = styld.div`
    width: 100%;
    height: 400px;
    position: relative;
    border: 1px solid black;
`;

const MapWrapper: React.FC<Props> = (props: Props) => {
  const { stores, loading } = useStores();

  function renderStores() {
    if (stores.length === 0) return null;
    if (loading) return <span>loading</span>;
    return stores.map((store) => <div key={store.ID}>{store.name}</div>);
  }

  return (
    <Wrapper>
      Map
      <Category />
      <Map />
      {renderStores()}
    </Wrapper>
  );
};

export default MapWrapper;
