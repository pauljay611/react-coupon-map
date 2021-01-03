import React from "react";
import styld from "styled-components";

import Category from "../Category";
import { ICategory, IStore } from "../../types";
import { useStores } from "../../hooks/store";
interface Props {
  categories: ICategory[];
}

const Wrapper = styld.div`
    width: 100%;
    height: 400px;
    position: relative;
    border: 1px solid black;
`;

const Map: React.FC<Props> = (props: Props) => {
  const { stores, loading } = useStores();
  const { categories } = props;

  function renderStores() {
    if (stores.length === 0) return null;
    if (loading) return <span>loading</span>;
    return stores.map((store) => <div key={store.ID}>{store.name}</div>);
  }

  return (
    <Wrapper>
      Map
      <Category categories={categories} />
      {renderStores()}
    </Wrapper>
  );
};

export default Map;
