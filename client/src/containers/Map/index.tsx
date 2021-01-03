import React, { useEffect } from "react";
import styld from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Category from "../Category";
import { ICategory, IStore } from "../../types";
import store, { RootState } from "../../store";
import { fetchAllStores } from "../../store/stores/actions";
interface Props {
  categories: ICategory[];
  stores: IStore[];
}

const Wrapper = styld.div`
    width: 100%;
    height: 400px;
    position: relative;
    border: 1px solid black;
`;

const Map: React.FC<Props> = (props: Props) => {
  const { stores, loading } = useSelector((state: RootState) => state.store);
  const dispatch = useDispatch();
  const { categories } = props;

  useEffect(() => {
    dispatch(fetchAllStores());
  }, []);

  console.log(stores);

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
