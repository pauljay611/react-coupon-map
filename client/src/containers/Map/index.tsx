import React, { useEffect } from "react";
import styld from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Category from "../Category";
import { ICategory, IStore } from "../../types";
import store, { RootState } from "../../store";
import { getAllStores } from "../../store/stores/actions";
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
  const { stores } = useSelector((state: RootState) => state.store);
  const dispatch = useDispatch();
  const { categories } = props;

  useEffect(() => {
    dispatch(getAllStores());
  }, []);

  console.log(stores);

  return (
    <Wrapper>
      Map
      <Category categories={categories} />
    </Wrapper>
  );
};

export default Map;
